import { create } from "zustand";
import {
  PasswordFieldState,
  PasswordFieldType,
} from "@/shared/model/types/types";
import { passwordFields } from "@/widgets/forms/model/config";

type PasswordStore = {
  fields: Record<PasswordFieldType, PasswordFieldState>;
  setPassword: (field: PasswordFieldType, password: string | null) => void;
  setTipMessage: (field: PasswordFieldType, message: string) => void;
  setIsPasswordSafe: (field: PasswordFieldType, status: boolean) => void;
  setTipVisible: (field: PasswordFieldType, visible: boolean) => void;
  getPassword: (field: PasswordFieldType) => string | null;
  resetPasswordFields: () => void;
};

export const usePasswordStore = create<PasswordStore>((set, get) => {
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

    getPassword: (field) => get().fields[field]?.password || null,

    resetPasswordFields: () =>
      set(() => ({
        fields: passwordFields,
      })),
  };
});
