import { Input } from "@/shared/ui/Input";
import { checkPasswordSafeness } from "@/shared/utils/checkPasswordSafeness";
import React, { ChangeEvent, useEffect, useState } from "react";
import ErrorIcon from "./ErrorIcon";
import useTip from "@/shared/hooks/useTip";

type TypeProps = {
  pending: boolean;
  defaultValue: string;
  onPasswordSafeCheck: (safe: boolean) => void;
};

const PasswordField = ({
  pending,
  defaultValue,
  onPasswordSafeCheck,
}: TypeProps) => {
  const [password, setPassword] = useState<string | null>(defaultValue);
  const [isSafe, setIsSafe] = useState<boolean | undefined>(undefined);
  const [tip, setTip] = useState<boolean>(false);
  const [tipMessage, setTipMessage] = useState<string>("");
  const { tipDisplay, tipVisible } = useTip(tip);

  useEffect(() => {
    const result = checkPasswordSafeness(password);
    if (result !== undefined) {
      setIsSafe(result.isPasswordSafe);
      setTipMessage(result.passwordTip);
      onPasswordSafeCheck(result.isPasswordSafe);
    }
  }, [password, onPasswordSafeCheck]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="relative w-full">
      <Input
        placeholder="password"
        name="password"
        autoComplete="new-password"
        type="password"
        pending={pending}
        defaultValue={defaultValue}
        onChange={handleChange}
      />

      {isSafe === false ? (
        <ErrorIcon
          setTip={setTip}
          tipMessage={tipMessage}
          tipDisplay={tipDisplay}
          tipVisible={tipVisible}
        />
      ) : null}
    </div>
  );
};

export default PasswordField;
