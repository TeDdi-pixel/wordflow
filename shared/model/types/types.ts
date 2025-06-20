import { ChangeEvent } from "react";

export type TypeInput = {
  placeholder: string;
  name: string;
  type: "text" | "email" | "password";
  defaultValue?: string;
  pending: boolean;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
};

export type TypeUser = {
  _id: string;
  username: string;
  email: string;
  password: string;
};

export type OperationResult<S extends string, E extends string> =
  | { type: S; message: string }
  | { type: E; message: string }
  | { type: string; message: string };

export type SessionUser = Omit<TypeUser, "password">;
