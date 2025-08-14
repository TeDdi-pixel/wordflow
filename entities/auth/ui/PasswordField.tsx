import { isPasswordField } from "@/shared/utils/isPasswordField";
import { Tip } from "./Tip";
import Input from "@/shared/components/inputs/Input";

type TypeProps = {
  pending: boolean;
  defaultValue: string;
  name: "password" | "verifyPassword" | "loginPassword";
  placeholder?: string;
  autoComplete?: string;
  isLoginPassword?: boolean;
};

export const PasswordField = ({
  pending,
  defaultValue,
  name,
  placeholder = "пароль",
  autoComplete = "new-password",
  isLoginPassword = false,
}: TypeProps) => {
  const storeName = isLoginPassword ? "loginPassword" : name;

  return (
    <div className="relative w-full">
      <Input
        placeholder={placeholder}
        name={name}
        storeName={storeName}
        autoComplete={autoComplete}
        type="password"
        pending={pending}
        defaultValue={defaultValue}
      />
      {isPasswordField(storeName) && <Tip name={storeName} />}
    </div>
  );
};
