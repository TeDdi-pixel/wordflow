import { create } from "zustand";
import { TypeFiltersStore } from "../model/types/filters-store";

export const useFiltersStore = create<TypeFiltersStore>((set) => ({
  isOpened: false,

  toggleFilters: () => set((state) => ({ isOpened: !state.isOpened })),
  closeFilters: () => set({ isOpened: false }),
}));
