"use client";

import { isPasswordField } from "@/shared/utils/auth/isPasswordField";
import { Tip } from "./sign-up-form/ui/Tip";
import usePassword from "@/widgets/forms/model/usePassword";
import { FaCheck } from "react-icons/fa";
import MistakeIcon from "@/shared/icons/unit/MistakeIcon";
import { usePasswordStore } from "@/shared/store/usePasswordStore";
import CopyPasswordButton from "@/shared/ui/buttons/CopyPasswordButton";
import AuthInput from "@/shared/ui/inputs/AuthInput";
import { StatusIconsHover } from "./sign-up-form/ui/StatusIconsHover";

type TypeProps = {
  pending: boolean;
  name: "password" | "verifyPassword" | "loginPassword";
  placeholder?: string;
  autoComplete?: string;
  isLoginPassword?: boolean;
  defaultValue: string;
};

export const PasswordField = ({
  pending,
  name,
  placeholder = "пароль",
  autoComplete = "new-password",
  isLoginPassword = false,
}: TypeProps) => {
  const storeName = isLoginPassword ? "loginPassword" : name;
  const {
    handleMouseEnter,
    handleMouseLeave,
    handleChange,
    handleCopy,
    inputRef,
    currentPassword,
    canCopy,
  } = usePassword({
    storeName,
    isLoginPassword,
  });
  const isStoreName = storeName && isPasswordField(storeName);
  const tipMessage = usePasswordStore(
    (state) => isStoreName && state.fields[storeName].tipMessage
  );
  const isPasswordSafe = usePasswordStore(
    (state) => isStoreName && state.fields[storeName].isPasswordSafe
  );

  return (
    <div className="relative w-full overflow-hidden">
      <AuthInput
        ref={inputRef}
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
        type="password"
        pending={pending}
        defaultValue={currentPassword}
        handleChange={handleChange}
      />

      <CopyPasswordButton canCopy={canCopy} handleCopy={handleCopy} />

      <StatusIconsHover
        tipMessage={!!tipMessage}
        errorIcon={<MistakeIcon />}
        successIcon={<FaCheck className="text-success" />}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isPasswordSafe={isPasswordSafe}
      />

      {isPasswordField(storeName) && currentPassword !== "" && (
        <Tip name={storeName} />
      )}
    </div>
  );
};
