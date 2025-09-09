import { create } from "zustand";
import { TypeSavedUnitsStore } from "../model/types/saved-units-store";

export const useSavedUnitsStore = create<TypeSavedUnitsStore>((set) => ({
  savedUnitsCounts: [],

  setSavedUnitsCounts: (unitSetId: string, count: number) =>
    set((state) => {
      return {
        savedUnitsCounts: [...state.savedUnitsCounts, { unitSetId, count }],
      };
    }),
}));
