import { ChangeEvent, RefObject } from "react";

export type TypeInput = {
  placeholder: string;
  name: string;
  type: "text" | "email" | "password";
  defaultValue?: string;
  pending: boolean;
  required?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  inputRef?: RefObject<HTMLInputElement>;
};

export type TypeInputError = {
  tipDisplay?: boolean;
  tipVisible?: boolean;
  tipMessage?: string;
  isError?: boolean;
  setTip?: (tip: boolean) => void;
};

export type PasswordFieldType = "password" | "verifyPassword" | "loginPassword";

export type PasswordFieldState = {
  tipMessage: string;
  tipVisible: boolean;
  password: string | null;
  isPasswordSafe: boolean;
};

export type TypeUser = {
  _id: string;
  username: string;
  email: string;
  password: string;
};

export type SessionUser = {
  userId: string;
};
