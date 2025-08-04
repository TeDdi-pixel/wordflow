import { usePasswordStore } from "@/store/usePasswordStore";
import { ReactNode } from "react";
import { PasswordFieldType } from "../model/types/types";

type TypeProps = {
  icon?: ReactNode;
  text: string;
  className?: string;
  isLoginButton?: boolean;
};

const SubmitButton = ({
  icon,
  text,
  className,
  isLoginButton = false,
}: TypeProps) => {
  const fields = usePasswordStore((state) => state.fields);

  const mustBeSafe: PasswordFieldType[] = isLoginButton
    ? ["loginPassword"]
    : ["password", "verifyPassword"];

  const passwordsAreSafe = mustBeSafe.every(
    (name) => fields[name].isPasswordSafe
  );

  return (
    <button
      type="submit"
      disabled={!passwordsAreSafe}
      className={
        className ??
        `w-full bg-button cursor-not-allowed py-1.5 rounded-default flex gap-2 justify-center items-center ${
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

export default SubmitButton;
