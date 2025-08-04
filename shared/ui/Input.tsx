import { TypeInput, TypeInputError } from "../model/types/types";
import MistakeIcon from "../icons/unit/MistakeIcon";
import { usePasswordStore } from "@/store/usePasswordStore";
import { isPasswordField } from "../helpers/isPasswordField";
import { FaCheck } from "react-icons/fa";

const Input = ({
  placeholder,
  name,
  storeName,
  type,
  defaultValue,
  pending,
  required = true,
  onChange,
  autoComplete,
}: TypeInput & TypeInputError & { storeName?: string }) => {
  const { setTipVisible, setPassword, fields } = usePasswordStore(
    (state) => state
  );

  const isStoreName = storeName && isPasswordField(storeName);
  const tipMessage = isStoreName ? fields[storeName].tipMessage : null;
  const isPasswordSafe = isStoreName ? fields[storeName].isPasswordSafe : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isStoreName) setPassword(storeName, e.target.value);

    if (onChange) onChange(e);
  };

  const handleMouseEnter = () => {
    if (isStoreName) setTipVisible(storeName, true);
  };

  const handleMouseLeave = () => {
    if (isStoreName) setTipVisible(storeName, false);
  };

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
            <FaCheck className="text-[#67FFB3]" />
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
};
export default Input;
