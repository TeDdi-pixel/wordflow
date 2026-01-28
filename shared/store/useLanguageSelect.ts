import { create } from "zustand";
import { TypeLanguageSelectStore } from "../model/types/language-select-store";

export const useLanguageSelectStore = create<TypeLanguageSelectStore>(
  (set) => ({
    isOpened: [],

    openLanguageSelect: (id: string) =>
      set((state) =>
        state.isOpened.includes(id) ? state : { isOpened: [id] },
      ),

    closeAllLanguageSelects: () => set({ isOpened: [] }),
  }),
);
