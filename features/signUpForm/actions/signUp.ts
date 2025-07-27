"use server";

import { InitialRegForm } from "../lib/types";
import User from "../../../shared/model/schemas/User";
import bcrypt from "bcrypt";
import { AUTH_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import { EMAIL_REGEX, SALT_ROUNDS } from "@/shared/model/constants/variables";
import createDbConnection from "@/shared/lib/mongoose";
import { createSession } from "@/shared/lib/session";

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
      message: AUTH_ERROR_MESSAGES.MISSING_FIELDS,
    };

  //testing email for correct format
  if (!EMAIL_REGEX.test(formData?.email)) {
    return {
      ...userBackUpFields(formData),
      message: AUTH_ERROR_MESSAGES.INVALID_EMAIL,
    };
  }

  if (
    formData?.email !== formData?.verifyEmail ||
    formData?.password !== formData?.verifyPassword
  ) {
    return {
      ...userBackUpFields(formData),
      message: AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
    };
  }
  //connect and create user in db
  await createDbConnection();
  //check for an existing user
  const existUserDoc = await User.findOne({ email: formData.email });
  if (existUserDoc) {
    return {
      ...userBackUpFields(formData),
      message: AUTH_ERROR_MESSAGES.EMAIL_IS_ALREADY_IN_USE,
    };
  }
  const hashedPassword = bcrypt.hashSync(formData.password, SALT_ROUNDS);

  const userDoc = await User.create({
    username: formData.username,
    password: hashedPassword,
    email: formData.email,
  });
  const user = userDoc.toObject();

  await createSession({ userId: user._id.toString() });
  //return an empty state to form back if success
  return { ...prevState, type: "SIGN_UP_SUCCESS" };
};
