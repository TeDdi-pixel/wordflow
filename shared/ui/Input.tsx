import { TypeInput } from "../model/types/types";

export const Input = ({
  placeholder,
  name,
  type,
  defaultValue,
  pending,
  required = true,
  onChange,
  autoComplete,
}: TypeInput) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      suppressHydrationWarning
      className={`bg-input text-accent placeholder:text-text h-9 w-823:max-w-[272px] w-full rounded-default pl-2 focus:ring-2 focus:ring-background-accent focus:outline-none ${
        pending ? "animate-pulse" : ""
      }`}
      required={required}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
};
