"use client";

import Form from "next/form";
import { signUpCredentials } from "../../../../features/auth/model/actions/signUpCredentials";
import { useActionState } from "react";
import { FaUserPlus } from "react-icons/fa";
import SubmitButton from "../../../../shared/components/buttons/AuthSubmitButton";
import useRedirect from "@/shared/hooks/useRedirect";
import { PasswordField } from "@/entities/auth";
import AuthError from "@/shared/components/errors/AuthError";
import AuthFormName from "@/shared/components/form/AuthFormName";
import { InitialRegForm } from "@/shared/model/types/auth";
import AuthInput from "@/shared/components/inputs/AuthInput";

const initialForm = {
  _id: "",
  username: "",
  email: "",
  verifyEmail: "",
  password: "",
  verifyPassword: "",
  message: "",
  type: "",
};

export const SignUpForm = () => {
  const [state, action, pending] = useActionState<InitialRegForm, FormData>(
    signUpCredentials,
    initialForm
  );

  useRedirect(state.type, "/");

  return (
    <Form
      action={action}
      className="flex flex-col gap-1 md:max-w-[272px] w-full -translate-y-1/2"
      autoComplete="on"
    >
      <AuthFormName
        icon={<FaUserPlus className="text-[20px]" />}
        name="register"
      />
      <AuthInput
        placeholder="ім'я користувача"
        name="username"
        type="text"
        defaultValue={state.username}
        pending={pending}
      />
      <AuthInput
        placeholder="email"
        name="email"
        type="email"
        pending={pending}
        defaultValue={state.email}
        autoComplete="email"
      />
      <AuthInput
        pending={pending}
        placeholder="підтвердіть email"
        name="verifyEmail"
        type="email"
        defaultValue={state.verifyEmail}
        autoComplete="email"
      />
      <PasswordField
        name="password"
        defaultValue={state.password}
        pending={pending}
      />
      <PasswordField
        defaultValue={state.verifyPassword}
        pending={pending}
        name="verifyPassword"
        placeholder="підтвердіть пароль"
      />
      {state?.message ? <AuthError message={state?.message} /> : null}
      <SubmitButton
        pending={pending}
        text="зареєструватися"
        icon={<FaUserPlus className="text-[20px]" />}
      />
    </Form>
  );
};
