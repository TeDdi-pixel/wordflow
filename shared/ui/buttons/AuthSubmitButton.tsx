import { usePasswordStore } from "@/shared/store/usePasswordStore";
import { ReactNode } from "react";
import { PasswordFieldType } from "../../model/types/types";
import Spinner from "../Spinner";

type TypeProps = {
  icon?: ReactNode;
  text: string;
  className?: string;
  isLoginButton?: boolean;
  pending: boolean;
};

const AuthSubmitButton = ({
  icon,
  text,
  className,
  isLoginButton = false,
  pending,
}: TypeProps) => {
  const mustBeSafe: PasswordFieldType[] = isLoginButton
    ? ["loginPassword"]
    : ["password", "verifyPassword"];

  const passwordsAreSafe = usePasswordStore((state) =>
    mustBeSafe.every((name) => state.fields[name].isPasswordSafe)
  );
  return (
    <button
      type="submit"
      disabled={!passwordsAreSafe || pending}
      className={
        className ??
        `w-full md:w-[268px] px-2 cursor-not-allowed py-1.5 rounded-default flex gap-2 justify-center items-center mx-0.5 border-transparent h-[36px] transition-all ${
          passwordsAreSafe && !pending
            ? "hover:bg-bg-accent-2 cursor-pointer text-text-2 hover:scale-95"
            : "text-disabled"
        } ${!passwordsAreSafe || pending ? "bg-fg" : "bg-bg-accent-2"}`
      }
    >
      {pending ? (
        <Spinner />
      ) : (
        <>
          <span>{icon}</span> <span>{text}</span>
        </>
      )}
    </button>
  );
};

export default AuthSubmitButton;
