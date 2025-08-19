"use server";

import { EMAIL_REGEX } from "@/shared/model/constants/variables";
import { AUTH_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import { InitialLoginForm } from "@/shared/model/types/auth";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const userBackUpFields = (formData: InitialLoginForm) => ({
  ...formData,
  type: "SIGN_IN_ERROR",
  errorId: crypto.randomUUID(),
});

export const signInCredentials = async (
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

  try {
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
    console.error("Login error:", error);

    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            ...userBackUpFields(formData),
            message: AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
          };
        default:
          const errorM = error.cause?.err?.message || error.message;
          return {
            ...userBackUpFields(formData),
            message: errorM ?? AUTH_ERROR_MESSAGES.SIGN_IN_ERROR,
          };
      }
    }
    throw error;
  }
};
