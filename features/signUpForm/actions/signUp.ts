"use server";

import { InitialRegForm } from "../lib/types";
import User from "../../../shared/lib/schemas/User";
import bcrypt from "bcrypt";
import { ERROR_MESSAGES } from "@/shared/lib/constants/errors";
import { EMAIL_REGEX, SALT_ROUNDS } from "@/shared/lib/constants/variables";
import createDbConnection from "@/shared/model/mongoose";
import { createSession } from "@/shared/model/session";

const userBackUpFields = (formData: InitialRegForm) => ({
  ...formData,
  type: "SIGN_UP_ERROR",
});

export const signUp = async (
  prevState: InitialRegForm,
  form: FormData
): Promise<InitialRegForm> => {
  const formData = Object.fromEntries(form.entries()) as InitialRegForm;
  //errors validation
  if (formData.email === "" || formData.password === "")
    return {
      ...userBackUpFields(formData),
      message: ERROR_MESSAGES.MISSING_FIELDS,
    };

  //testing email for correct format
  if (!EMAIL_REGEX.test(formData?.email)) {
    return {
      ...userBackUpFields(formData),
      message: ERROR_MESSAGES.INVALID_EMAIL,
    };
  }

  if (
    formData?.email !== formData?.verifyEmail ||
    formData?.password !== formData?.verifyPassword
  ) {
    return {
      ...userBackUpFields(formData),
      message: ERROR_MESSAGES.INVALID_CREDENTIALS,
    };
  }
  //connect and create user in db
  await createDbConnection();
  //check for an existing user
  const existEmail = await User.findOne({ email: formData.email });
  if (existEmail) {
    return {
      ...userBackUpFields(formData),
      message: ERROR_MESSAGES.EMAIL_IS_ALREADY_IN_USE,
    };
  }
  const hashedPassword = bcrypt.hashSync(formData.password, SALT_ROUNDS);

  const userDoc = await User.create({
    username: formData.username,
    password: hashedPassword,
    email: formData.email,
  });
  const user = userDoc.toObject();
  delete user.password;

  await createSession({ ...user, _id: user._id.toString() });
  //return an empty state to form back if success
  return { ...prevState, type: "SIGN_UP_SUCCESS" };
};
