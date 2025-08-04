import { create } from "zustand";
import { passwordFields } from "./config/passwordFields";
import { PasswordFieldType } from "@/shared/model/types/types";

type PasswordFieldState = {
  tipMessage: string;
  tipVisible: boolean;
  password: string | null;
  isPasswordSafe: boolean;
};

type PasswordStore = {
  fields: Record<PasswordFieldType, PasswordFieldState>;
  setPassword: (field: PasswordFieldType, password: string | null) => void;
  setTipMessage: (field: PasswordFieldType, message: string) => void;
  setIsPasswordSafe: (field: PasswordFieldType, status: boolean) => void;
  setTipVisible: (field: PasswordFieldType, visible: boolean) => void;
};
export const usePasswordStore = create<PasswordStore>((set) => ({
  fields: passwordFields,
  setPassword: (field, password) =>
    set((state) => ({
      fields: {
        ...state.fields,
        [field]: { ...state.fields[field], password: password },
      },
    })),
  setTipMessage: (field, message) =>
    set((state) => ({
      fields: {
        ...state.fields,
        [field]: {
          ...state.fields[field],
          tipMessage: message,
        },
      },
    })),

  setIsPasswordSafe: (field, status) =>
    set((state) => ({
      fields: {
        ...state.fields,
        [field]: {
          ...state.fields[field],
          isPasswordSafe: status,
        },
      },
    })),

  setTipVisible: (field, visible) =>
    set((state) => ({
      fields: {
        ...state.fields,
        [field]: {
          ...state.fields[field],
          tipVisible: visible,
        },
      },
    })),
}));
