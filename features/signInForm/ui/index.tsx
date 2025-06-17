"use client";

import { useActionState, useEffect } from "react";
import { redirect } from "next/navigation";
import Form from "next/form";
import FormName from "@/shared/ui/FormName";
import { Input } from "@/shared/ui/Input";
import ErrorMessage from "@/shared/ui/Error";
import SubmitButton from "@/shared/ui/SubmitButton";
import { IoEnter } from "react-icons/io5";
import { AdditionalEntrance } from "./AdditionalEntrance";
import { FaGoogle, FaGithub } from "react-icons/fa";
import CheckBox from "@/shared/ui/CheckBox";
import { InitialLoginForm } from "../lib/types";
import { signIn } from "../actions/sighIn";

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
      <Input
        placeholder="email"
        name="email"
        type="email"
        pending={pending}
        defaultValue={state.email}
      />
      <Input
        placeholder="password"
        name="password"
        type="password"
        pending={pending}
        defaultValue={state.password}
      />
      <CheckBox label="remember me" />
      {state?.message ? <ErrorMessage message={state?.message} /> : null}
      <SubmitButton text="sign in" icon={<IoEnter className="text-[20px]" />} />
    </Form>
  );
};
