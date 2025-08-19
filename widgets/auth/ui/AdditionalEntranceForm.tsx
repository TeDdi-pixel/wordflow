import { signInWithGoogle } from "@/features/auth/model/actions/signInWithGoogle";
import AuthIconButton from "@/shared/components/buttons/AuthIconButton";
import Form from "next/form";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export const AdditionalEntranceForm = () => {
  return (
    <Form action={signInWithGoogle} className="flex gap-4 w-full">
      <AuthIconButton icon={<FaGoogle />} />
    </Form>
  );
};
