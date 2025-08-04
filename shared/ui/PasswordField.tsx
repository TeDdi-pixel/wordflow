import { checkPasswordSafeness } from "@/shared/utils/checkPasswordSafeness";
import { useEffect } from "react";
import { usePasswordStore } from "@/store/usePasswordStore";
import Input from "./Input";
import { Tip } from "@/entities/tip";
import { isPasswordField } from "../helpers/isPasswordField";

type TypeProps = {
  pending: boolean;
  defaultValue: string;
  name: "password" | "verifyPassword" | "loginPassword";
  placeholder?: string;
  autoComplete?: string;
  isLoginPassword?: boolean;
};

const PasswordField = ({
  pending,
  defaultValue,
  name,
  placeholder = "password",
  autoComplete = "new-password",
  isLoginPassword = false,
}: TypeProps) => {
  const { setTipMessage, fields, setIsPasswordSafe } = usePasswordStore(
    (state) => state
  );

  const storeName = isLoginPassword ? "loginPassword" : name;
  const password = fields[storeName].password;

  useEffect(() => {
    const result = checkPasswordSafeness(password);

    if (result !== undefined) {
      setTipMessage(storeName, result.passwordTip);
      setIsPasswordSafe(storeName, result.isPasswordSafe);
    } else {
      setTipMessage(storeName, "");
      setIsPasswordSafe(storeName, false);
    }
  }, [password, setIsPasswordSafe]);

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

export default PasswordField;
