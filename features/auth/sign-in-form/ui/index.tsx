"use client";

import { useActionState } from "react";
import Form from "next/form";
import { IoEnter } from "react-icons/io5";
import { AdditionalEntrance } from "./AdditionalEntrance";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn } from "../actions/signIn";
import CheckBox from "@/shared/components/CheckBox";
import SubmitButton from "@/shared/components/buttons/AuthSubmitButton";
import Input from "@/shared/components/inputs/Input";
import useRedirect from "@/shared/hooks/useRedirect";
import { PasswordField } from "@/entities/auth";
import AuthError from "@/shared/components/errors/AuthError";
import AuthFormName from "@/shared/components/form/AuthFormName";
import { InitialLoginForm } from "@/shared/model/types/auth";

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
      className="flex flex-col md:items-center gap-2 md:max-w-[272px] w-full"
    >
      <AuthFormName icon={<IoEnter className="text-[20px]" />} name="login" />
      <div className="flex gap-4 md:w-full">
        <AdditionalEntrance icon={<FaGoogle />} />
        <AdditionalEntrance icon={<FaGithub />} />
      </div>

      <div className="md:w-full">
        <span className="flex items-center before:mr-2 before:flex-1 before:h-1 before:bg-foreground after:ml-2 after:flex-1 after:h-1 after:bg-foreground">
          or
        </span>
      </div>
      <div className="flex flex-col gap-1 md:w-full">
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
      <CheckBox label="запам'ятати мене" />
      {state?.message ? <AuthError message={state?.message} /> : null}
      <SubmitButton
        text="вхід"
        icon={<IoEnter className="text-[20px]" />}
        isLoginButton
      />
    </Form>
  );
};
