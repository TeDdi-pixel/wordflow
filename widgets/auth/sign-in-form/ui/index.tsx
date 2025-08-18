"use client";

import { useActionState } from "react";
import { IoEnter } from "react-icons/io5";
import { signInCredentials } from "../../../../features/auth/model/actions/signInCredentials";
import CheckBox from "@/shared/components/CheckBox";
import SubmitButton from "@/shared/components/buttons/AuthSubmitButton";
import useRedirect from "@/shared/hooks/useRedirect";
import { PasswordField } from "@/entities/auth";
import AuthError from "@/shared/components/errors/AuthError";
import { InitialLoginForm } from "@/shared/model/types/auth";
import AuthInput from "@/shared/components/inputs/AuthInput";
import Form from "next/form";

const initialForm = {
  _id: "",
  email: "",
  password: "",
  message: "",
  type: "",
};

export const SignInForm = () => {
  const [state, action, pending] = useActionState<InitialLoginForm, FormData>(
    signInCredentials,
    initialForm
  );

  useRedirect(state.type, "/");

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
      {state?.message ? <AuthError message={state?.message} /> : null}
      <SubmitButton
        pending={pending}
        text="вхід"
        icon={<IoEnter className="text-[20px]" />}
        isLoginButton
      />
    </Form>
  );
};
