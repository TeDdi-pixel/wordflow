"use server";

import User from "../../../../shared/model/schemas/User";
import bcrypt from "bcrypt";
import { AUTH_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import { EMAIL_REGEX, SALT_ROUNDS } from "@/shared/model/constants/variables";
import { InitialRegForm } from "@/shared/model/types/auth";
import createDbConnection from "@/shared/lib/mongoose";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const userBackUpFields = (formData: InitialRegForm) => ({
  ...formData,
  type: "SIGN_UP_ERROR",
  errorId: crypto.randomUUID(),
});

export const signUpCredentials = async (
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
      message: AUTH_ERROR_MESSAGES.CREDENTIALS_DO_NOT_MATCH,
    };
  }
  //connect and create user in db
  try {
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

    await User.create({
      username: formData.username,
      password: hashedPassword,
      email: formData.email,
      provider: "credentials",
    });

    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (res?.error) {
      return {
        ...userBackUpFields(formData),
        message: res.error,
      };
    }
    redirect("/");
  } catch (error) {
    console.error("Registration error:", error);

    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            ...userBackUpFields(formData),
            message: AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
          };
        default:
          return {
            ...userBackUpFields(formData),
            message: AUTH_ERROR_MESSAGES.SIGN_UP_ERROR,
          };
      }
    }
    throw error;
  }
};
