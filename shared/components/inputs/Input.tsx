import { TypeInput, TypeInputError } from "../../model/types/types";
import { usePasswordStore } from "@/store/usePasswordStore";
import { isPasswordField } from "../../utils/isPasswordField";
import { FaCheck } from "react-icons/fa";
import { checkPasswordSafeness } from "@/shared/utils/checkPasswordSafeness";
import { memo, useMemo, useCallback } from "react";
import MistakeIcon from "../../icons/unit/MistakeIcon";

const Input = memo(
  ({
    placeholder,
    name,
    storeName,
    type,
    defaultValue,
    pending,
    required = true,
    onChange,
    autoComplete,
  }: TypeInput & TypeInputError) => {
    const setTipVisible = usePasswordStore((state) => state.setTipVisible);
    const setPassword = usePasswordStore((state) => state.setPassword);
    const setTipMessage = usePasswordStore((state) => state.setTipMessage);
    const setIsPasswordSafe = usePasswordStore(
      (state) => state.setIsPasswordSafe
    );

    const isStoreName = storeName && isPasswordField(storeName);
    const tipMessage = usePasswordStore(
      (state) => isStoreName && state.fields[storeName].tipMessage
    );
    const isPasswordSafe = usePasswordStore(
      (state) => isStoreName && state.fields[storeName].isPasswordSafe
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const password = e.target.value;

      onChange?.(e);

      if (!isStoreName) return;

      setPassword(storeName, password);

      if (type !== "password") return;

      const safetyResult = checkPasswordSafeness(password);

      if (safetyResult) {
        setTipMessage(storeName, safetyResult.passwordTip);
        setIsPasswordSafe(storeName, safetyResult.isPasswordSafe);
      } else {
        setTipMessage(storeName, "");
        setIsPasswordSafe(storeName, false);
      }
    };

    const handleMouseEnter = useCallback(() => {
      if (isStoreName) setTipVisible(storeName, true);
    }, [isStoreName, storeName, setTipVisible]);

    const handleMouseLeave = useCallback(() => {
      if (isStoreName) setTipVisible(storeName, false);
    }, [isStoreName, storeName, setTipVisible]);

    return (
      <div className="relative w-full rounded-default overflow-hidden transition-colors duration-200 border-2 border-transparent focus-within:border-background-accent">
        <input
          className={`bg-input text-accent placeholder:text-text h-9 w-823:max-w-[272px] w-full rounded-default px-2 focus:outline-none ${
            pending ? "animate-pulse" : ""
          }`}
          type={type}
          placeholder={placeholder}
          name={name}
          defaultValue={defaultValue}
          required={required}
          autoComplete={autoComplete}
          onChange={handleChange}
        />
        {type === "password" && (
          <div
            className={`absolute top-1/2 right-0 -translate-y-1/2 z-10 transition-all duration-200 ease-out ${
              tipMessage
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[26px] pointer-events-none"
            }`}
          >
            <div
              className={`absolute top-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 cursor-pointer transition-transform duration-200 ${
                isPasswordSafe ? "scale-100" : "scale-0 pointer-events-none"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FaCheck className="text-success" />
            </div>

            <div
              className={`absolute top-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 cursor-pointer transition-transform duration-200 ${
                isPasswordSafe ? "scale-0 pointer-events-none" : "scale-85"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <MistakeIcon />
            </div>
          </div>
        )}
      </div>
    );
  }
);
export default Input;
