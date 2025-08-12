import { usePasswordStore } from "@/store/usePasswordStore";
import { ReactNode } from "react";
import { PasswordFieldType } from "../../model/types/types";

type TypeProps = {
  icon?: ReactNode;
  text: string;
  className?: string;
  isLoginButton?: boolean;
};

const AuthSubmitButton = ({
  icon,
  text,
  className,
  isLoginButton = false,
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
      disabled={!passwordsAreSafe}
      className={
        className ??
        `w-full md:w-[268px] px-2 bg-button cursor-not-allowed py-1.5 rounded-default flex gap-2 justify-center items-center mx-0.5 border-transparent h-[36px] ${
          passwordsAreSafe
            ? "hover:bg-background-accent-2 cursor-pointer hover:text-text-2 transition-colors duration-150 text-accent-text"
            : "text-disabled"
        }`
      }
    >
      {icon}
      {text}
    </button>
  );
};

export default AuthSubmitButton;
