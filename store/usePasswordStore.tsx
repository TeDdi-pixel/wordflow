import { create } from "zustand";
import { passwordFields } from "./config/passwordFields";
import {
  PasswordFieldState,
  PasswordFieldType,
} from "@/shared/model/types/types";

type PasswordStore = {
  fields: Record<PasswordFieldType, PasswordFieldState>;
  setPassword: (field: PasswordFieldType, password: string | null) => void;
  setTipMessage: (field: PasswordFieldType, message: string) => void;
  setIsPasswordSafe: (field: PasswordFieldType, status: boolean) => void;
  setTipVisible: (field: PasswordFieldType, visible: boolean) => void;
};

export const usePasswordStore = create<PasswordStore>((set) => {
  const updateField = (
    field: PasswordFieldType,
    partial: Partial<PasswordFieldState>
  ) =>
    set((state) => ({
      fields: {
        ...state.fields,
        [field]: {
          ...state.fields[field],
          ...partial,
        },
      },
    }));

  return {
    fields: passwordFields,

    setPassword: (field, password) => updateField(field, { password }),

    setTipMessage: (field, message) =>
      updateField(field, { tipMessage: message }),

    setIsPasswordSafe: (field, status) =>
      updateField(field, { isPasswordSafe: status }),

    setTipVisible: (field, visible) =>
      updateField(field, { tipVisible: visible }),
  };
});
