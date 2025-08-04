"use client";

import Form from "next/form";
import { signUp } from "../actions/signUp";
import { InitialRegForm } from "../lib/types";
import { useActionState } from "react";
import { FaUserPlus } from "react-icons/fa";
import PasswordField from "../../../shared/ui/PasswordField";
import SubmitButton from "../../../shared/ui/SubmitButton";
import FormName from "@/shared/ui/FormName";
import ErrorMessage from "@/shared/ui/Error";
import Input from "@/shared/ui/Input";
import useRedirect from "@/shared/hooks/useRedirect";

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
    signUp,
    initialForm
  );

  useRedirect(state.type, "/");

  return (
    <Form
      action={action}
      className="flex flex-col gap-1 w-805:max-w-[272px] w-full"
      autoComplete="on"
    >
      <FormName icon={<FaUserPlus className="text-[20px]" />} name="register" />
      <Input
        placeholder="username"
        name="username"
        type="text"
        defaultValue={state.username}
        pending={pending}
        autoComplete="username"
      />
      <Input
        placeholder="email"
        name="email"
        type="email"
        pending={pending}
        defaultValue={state.email}
        autoComplete="email"
      />
      <Input
        pending={pending}
        placeholder="verify email"
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
        placeholder="verify password"
      />
      {state?.message ? <ErrorMessage message={state?.message} /> : null}
      <SubmitButton
        text="sign up"
        icon={<FaUserPlus className="text-[20px]" />}
      />
    </Form>
  );
};
