"use client";
import Form from "next/form";
import { Input } from "@/shared/ui/Input";
import { signUp } from "../actions/signUp";
import { InitialRegForm } from "../lib/types";
import { useActionState, useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { redirect } from "next/navigation";
import ErrorMessage from "@/shared/ui/Error";
import FormName from "@/shared/ui/FormName";
import PasswordField from "./PasswordField";
import VerifyPasswordField from "./VerifyPasswordField";
import SubmitButton from "./SubmitButton";

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

  const [isPasswordSafe, setIsPasswordSafe] = useState(false);

  const handlePasswordSafeCheck = (safe: boolean) => {
    setIsPasswordSafe(safe);
  };

  useEffect(() => {
    if (state.type === "SIGN_UP_SUCCESS") {
      redirect("/");
    }
  }, [state.type]);
  return (
    <Form
      action={action}
      className="flex flex-col gap-2 w-805:max-w-[272px] w-full"
    >
      <FormName icon={<FaUserPlus className="text-[20px]" />} name="register" />
      <Input
        placeholder="username"
        name="username"
        type="text"
        defaultValue={state.username}
        pending={pending}
      />
      <Input
        placeholder="email"
        name="email"
        type="email"
        pending={pending}
        defaultValue={state.email}
      />
      <Input
        pending={pending}
        placeholder="verify email"
        name="verifyEmail"
        type="email"
        defaultValue={state.verifyEmail}
      />
      <PasswordField
        defaultValue={state.password}
        onPasswordSafeCheck={handlePasswordSafeCheck}
        pending={pending}
      />
      <VerifyPasswordField
        pending={pending}
        defaultValue={state.verifyPassword}
        onPasswordSafeCheck={handlePasswordSafeCheck}
      />
      {state?.message ? <ErrorMessage message={state?.message} /> : null}
      <SubmitButton
        text="sign up"
        icon={<FaUserPlus className="text-[20px]" />}
        isPasswordSafe={isPasswordSafe}
      />
    </Form>
  );
};
