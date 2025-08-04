"use client";

import { useActionState } from "react";
import Form from "next/form";
import { IoEnter } from "react-icons/io5";
import { AdditionalEntrance } from "./AdditionalEntrance";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { InitialLoginForm } from "../lib/types";
import { signIn } from "../actions/sighIn";
import FormName from "@/shared/ui/FormName";
import CheckBox from "@/shared/ui/CheckBox";
import ErrorMessage from "@/shared/ui/Error";
import SubmitButton from "@/shared/ui/SubmitButton";
import Input from "@/shared/ui/Input";
import useRedirect from "@/shared/hooks/useRedirect";
import { PasswordField } from "@/entities/authentication";

const initialForm = {
  _id: "",
  email: "",
  password: "",
  message: "",
  type: "",
};

export const SignInForm = () => {
  const [state, action, pending] = useActionState<InitialLoginForm, FormData>(
    signIn,
    initialForm
  );

  useRedirect(state.type, "/");

  return (
    <Form
      action={action}
      className="flex flex-col gap-2 w-805:max-w-[272px] w-full"
    >
      <FormName icon={<IoEnter className="text-[20px]" />} name="login" />
      <div className="flex gap-4">
        <AdditionalEntrance icon={<FaGoogle />} />
        <AdditionalEntrance icon={<FaGithub />} />
      </div>

      <div>
        <span className="flex items-center before:mr-2 before:flex-1 before:h-1 before:bg-foreground after:ml-2 after:flex-1 after:h-1 after:bg-foreground">
          or
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <Input
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
      <CheckBox label="remember me" />
      {state?.message ? <ErrorMessage message={state?.message} /> : null}
      <SubmitButton
        text="sign in"
        icon={<IoEnter className="text-[20px]" />}
        isLoginButton
      />
    </Form>
  );
};
