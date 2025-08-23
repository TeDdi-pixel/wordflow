"use client";

import { IoEnter } from "react-icons/io5";
import CheckBox from "@/shared/ui/CheckBox";
import SubmitButton from "@/shared/ui/buttons/AuthSubmitButton";
import AuthInput from "@/shared/ui/inputs/AuthInput";
import Form from "next/form";
import useActionForm from "@/shared/hooks/useActionForm";
import { InitialLoginForm } from "@/shared/model/types/auth";
import { initialForm } from "../model/config";
import { signInCredentials } from "../model/signInCredentials";
import { PasswordField } from "../../PasswordField";

export const SignInForm = () => {
  const { state, action, pending } = useActionForm<InitialLoginForm>(
    signInCredentials,
    initialForm
  );

  return (
    <Form
      action={action}
      className="flex flex-col md:items-center gap-2 md:max-w-[272px] w-full"
    >
      <div className="flex flex-col gap-1 md:w-full">
        <AuthInput
          placeholder="email"
          name="email"
          type="email"
          pending={pending}
          autoComplete="email"
          defaultValue={state.email}
        />
        <PasswordField
          defaultValue={state.password}
          name="password"
          pending={pending}
          autoComplete="current-password"
          isLoginPassword
        />
      </div>
      <CheckBox label="запам'ятати мене" />
      <SubmitButton
        pending={pending}
        text="вхід"
        icon={<IoEnter className="text-[20px]" />}
        isLoginButton
      />
    </Form>
  );
};
