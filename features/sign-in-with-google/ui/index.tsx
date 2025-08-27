import Form from "next/form";
import { FaGoogle } from "react-icons/fa";
import { signInWithGoogle } from "../model/signInWithGoogle";
import AuthIconButton from "@/shared/ui/buttons/AuthIconButton";

export const SignInWithGoogle = () => {
  return (
    <Form action={signInWithGoogle} className="flex gap-4 w-full">
      <AuthIconButton icon={<FaGoogle />} />
    </Form>
  );
};
