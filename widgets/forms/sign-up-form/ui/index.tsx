"use client";

import Form from "next/form";
import { FaUserPlus } from "react-icons/fa";
import SubmitButton from "../../../../shared/ui/buttons/AuthSubmitButton";
import { InitialRegForm } from "@/shared/model/types/auth";
import AuthInput from "@/shared/ui/inputs/AuthInput";
import { signUpCredentials } from "../../../../features/sign-up/model/signUpCredentials";
import useActionForm from "@/shared/hooks/useActionForm";
import { initialForm } from "../models/config";
import { PasswordField } from "../../PasswordField";
import AuthFormName from "@/shared/ui/form/AuthFormName";

export const SignUpForm = () => {
  const { state, action, pending } = useActionForm<InitialRegForm>(
    signUpCredentials,
    initialForm
  );

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

      <SubmitButton
        pending={pending}
        text="зареєструватися"
        icon={<FaUserPlus className="text-[20px]" />}
      />
    </Form>
  );
};
