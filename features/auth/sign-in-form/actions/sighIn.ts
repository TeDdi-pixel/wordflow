"use server";

import User from "../../../../shared/model/schemas/User";
import bcrypt from "bcrypt";
import createDbConnection from "@/shared/lib/mongoose";
import { EMAIL_REGEX } from "@/shared/model/constants/variables";
import { AUTH_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import { createSession } from "@/shared/lib/session";
import { InitialLoginForm } from "@/shared/model/types/auth";

const userBackUpFields = (formData: InitialLoginForm) => ({
  ...formData,
  type: "SIGN_IN_ERROR",
});

export const signIn = async (
  prevState: InitialLoginForm,
  form: FormData
): Promise<InitialLoginForm> => {
  const formData = Object.fromEntries(form.entries()) as InitialLoginForm;

  //form fields validation
  if (formData?.email === "" || formData?.password === "")
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

  //comparing user password from login form with db password in hash
  await createDbConnection();

  const userDoc = await User.findOne({ email: formData.email });
  if (!userDoc) {
    return {
      ...userBackUpFields(formData),
      message: AUTH_ERROR_MESSAGES.USER_NOT_FOUND,
    };
  }
  const user = { ...userDoc?.toObject(), _id: userDoc?._id.toString() };
  if (!user) {
    return {
      ...userBackUpFields(formData),
      message: AUTH_ERROR_MESSAGES.USER_NOT_FOUND,
    };
  }

  if (!formData.password || !user.password) {
    return {
      ...userBackUpFields(formData),
      message: AUTH_ERROR_MESSAGES.MISSING_FIELDS,
    };
  }

  const isPasswordMatch = bcrypt.compareSync(formData.password, user.password);

  if (!isPasswordMatch)
    return {
      ...userBackUpFields(formData),
      message: AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
    };
  //creating jwt session in cookies
  await createSession({ userId: user?._id.toString() });

  //return an empty state to form back if success
  return { ...prevState, type: "SIGN_UP_SUCCESS" };
};
