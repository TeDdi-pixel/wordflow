"use client";

import { TypeInput, TypeInputError } from "@/shared/model/types/types";
import { forwardRef, memo } from "react";

type FormInputProps = TypeInput & TypeInputError;

const AuthInput = memo(
  forwardRef<HTMLInputElement, FormInputProps>(
    (
      {
        placeholder,
        name,
        type,
        pending,
        required = true,
        handleChange,
        autoComplete,
        defaultValue,
      },
      ref
    ) => {
      return (
        <div className="relative w-full overflow-hidden transition-colors border-2 border-transparent rounded-default focus-within:border-bg-accent">
          <input
            ref={ref}
            className={`bg-fg placeholder:opacity-50 text-accent font-normal placeholder:text-text h-9 w-full rounded-default px-2 focus:outline-none ${
              pending ? "animate-pulse" : ""
            } ${type === "password" ? "pr-[36px]" : ""}`}
            type={type}
            placeholder={placeholder}
            name={name}
            required={required}
            autoComplete={autoComplete}
            defaultValue={defaultValue}
            onChange={handleChange}
          />
        </div>
      );
    }
  )
);

export default AuthInput;
