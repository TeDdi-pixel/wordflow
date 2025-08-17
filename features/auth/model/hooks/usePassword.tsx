import {
  PasswordFieldType,
  TypeInput,
  TypeInputError,
} from "@/shared/model/types/types";
import {
  checkPasswordSafeness,
  checkPasswordsMatch,
} from "@/shared/utils/auth/checkPasswordSafeness";
import { getOppositeField } from "@/shared/utils/auth/getOppositeField";
import { isPasswordField } from "@/shared/utils/auth/isPasswordField";
import { usePasswordStore } from "@/store/usePasswordStore";
import { useCallback, useRef } from "react";

type Props = Omit<TypeInput, "type" | "placeholder" | "name" | "pending"> &
  TypeInputError & { isLoginPassword: boolean; storeName: PasswordFieldType };

const usePassword = ({ storeName, isLoginPassword }: Props) => {
  const setTipVisible = usePasswordStore((state) => state.setTipVisible);
  const setPassword = usePasswordStore((state) => state.setPassword);
  const setTipMessage = usePasswordStore((state) => state.setTipMessage);
  const setIsPasswordSafe = usePasswordStore(
    (state) => state.setIsPasswordSafe
  );
  const fields = usePasswordStore((state) => state.fields);
  const getPassword = usePasswordStore((state) => state.getPassword);

  const inputRef = useRef<HTMLInputElement>(null);

  const defaultHandlers = {
    handleMouseEnter: () => {},
    handleMouseLeave: () => {},
    handleChange: () => {},
    canCopy: false,
    inputRef,
    handleCopy: () => {},
    currentPassword: "",
  };

  if (!storeName) return defaultHandlers;

  const isStoreName = storeName && isPasswordField(storeName);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    if (!isStoreName) return;

    setPassword(storeName, password);

    let safetyResult;

    if (storeName === "verifyPassword") {
      const mainPassword = getPassword("password");
      safetyResult = checkPasswordsMatch(mainPassword, password);
    } else {
      safetyResult = checkPasswordSafeness(password);

      if (storeName === "password") {
        const verifyPassword = getPassword("verifyPassword");

        if (verifyPassword) {
          const matchResult = checkPasswordsMatch(password, verifyPassword);
          if (matchResult) {
            setTipMessage("verifyPassword", matchResult.passwordTip);
            setIsPasswordSafe("verifyPassword", matchResult.isPasswordSafe);
          }
        }
      }
    }

    if (safetyResult) {
      setTipMessage(storeName, safetyResult.passwordTip);
      setIsPasswordSafe(storeName, safetyResult.isPasswordSafe);
    } else {
      setTipMessage(storeName, "");
      setIsPasswordSafe(storeName, false);
    }
  };

  const handleCopy = () => {
    if (!sourcePassword || currentPassword !== "") return;

    setPassword(storeName, sourcePassword);
    const safety = checkPasswordSafeness(sourcePassword);
    setTipMessage(storeName, safety?.passwordTip || "");
    setIsPasswordSafe(storeName, safety?.isPasswordSafe || false);

    if (storeName === "password") {
      const verify = getPassword("verifyPassword");
      if (verify) {
        const match = checkPasswordsMatch(sourcePassword, verify);
        if (match) {
          setTipMessage("verifyPassword", match.passwordTip);
          setIsPasswordSafe("verifyPassword", match.isPasswordSafe);
        } else {
          setTipMessage("verifyPassword", "");
          setIsPasswordSafe("verifyPassword", false);
        }
      }
    }

    if (storeName === "verifyPassword") {
      const password = getPassword("password");
      if (password) {
        const match = checkPasswordsMatch(password, sourcePassword);
        if (match) {
          setTipMessage(storeName, match.passwordTip);
          setIsPasswordSafe(storeName, match.isPasswordSafe);
        } else {
          setTipMessage(storeName, "");
          setIsPasswordSafe(storeName, false);
        }
      }
    }

    if (inputRef.current) {
      inputRef.current.value = sourcePassword;
    }
  };

  const isAllReady = () => {
    const password = getPassword("password");
    const verifyPassword = getPassword("verifyPassword");
    const match = checkPasswordsMatch(password, verifyPassword);
    const passwordSafe = checkPasswordSafeness(password)?.isPasswordSafe;
    const verifySafe = checkPasswordSafeness(verifyPassword)?.isPasswordSafe;
    return match && passwordSafe && verifySafe;
  };

  const currentPassword = fields[storeName]?.password ?? "";
  const sourceField = getOppositeField(storeName);
  const sourcePassword = getPassword(sourceField);

  const isSourcePasswordValid = sourcePassword
    ? checkPasswordSafeness(sourcePassword)?.isPasswordSafe
    : false;

  const canCopy =
    !isLoginPassword &&
    isPasswordField(storeName) &&
    sourcePassword &&
    isSourcePasswordValid &&
    currentPassword === "" &&
    !isAllReady();

  const handleMouseEnter = useCallback(() => {
    if (isStoreName) setTipVisible(storeName, true);
  }, [isStoreName, storeName, setTipVisible]);

  const handleMouseLeave = useCallback(() => {
    if (isStoreName) setTipVisible(storeName, false);
  }, [isStoreName, storeName, setTipVisible]);

  return {
    handleMouseEnter,
    handleMouseLeave,
    handleChange,
    canCopy: !!canCopy,
    inputRef,
    handleCopy,
    currentPassword,
  };
};

export default usePassword;
