import { create } from "zustand";
import { TypeSavedUnitsStore } from "../model/types/saved-units-store";

export const useSavedUnitsStore = create<TypeSavedUnitsStore>((set) => ({
  randomUnitsCounter: 30,
  savedUnitsCounts: [],

  setRandomUnitsCounter: (value: number) =>
    set(() => ({
      randomUnitsCounter: Math.min(30, Math.max(1, value)),
    })),
  setSavedUnitsCounts: (unitSetId: string, count: number) =>
    set((state) => {
      return {
        savedUnitsCounts: [...state.savedUnitsCounts, { unitSetId, count }],
      };
    }),
}));
