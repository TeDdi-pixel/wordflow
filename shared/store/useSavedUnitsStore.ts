import { create } from "zustand";
import { TypeSavedUnitsStore } from "../model/types/saved-units-store";

export const useSavedUnitsStore = create<TypeSavedUnitsStore>((set) => ({
  randomUnitsCounter: 30,
  selectedUnits: [],
  unitsToSelect: [],
  savedUnits: [],
  savedUnitsCounts: [],

  setSavedUnitsCounts: (unitSetId: string, newCount: number) =>
    set((state) => {
      const existingUnit = state.savedUnitsCounts.find(
        (unit) => unit.unitSetId === unitSetId
      );

      return {
        savedUnitsCounts: existingUnit
          ? state.savedUnitsCounts.map((unit) =>
              unit.unitSetId === unitSetId
                ? { unitSetId, count: newCount }
                : unit
            )
          : [...state.savedUnitsCounts, { unitSetId, count: newCount }],
      };
    }),

  addSavedUnit: (unitId: string) =>
    set((state) => ({
      savedUnits: Array.from(new Set([...state.savedUnits, unitId])),
    })),

  removeSavedUnit: (unitId: string) =>
    set((state) => ({
      savedUnits: state.savedUnits.filter(
        (savedUnitId) => savedUnitId !== unitId
      ),
    })),

  selectFirstThirtyUnits: () =>
    set((state) => ({
      selectedUnits: state.unitsToSelect
        .slice(0, 30)
        .map((doc) => ({ ...doc, checked: true })),
    })),

  unSelectAll: () => set({ selectedUnits: [] }),
  checkSelectedUnit: (docId: string) =>
    set((state) => {
      const alreadySelected = state.selectedUnits.find(
        (u) => u.docId === docId
      );

      if (alreadySelected) {
        return {
          selectedUnits: state.selectedUnits.filter((u) => u.docId !== docId),
        };
      }

      if (state.selectedUnits.length >= 30) return {};

      const unitToAdd = state.unitsToSelect.find((u) => u.docId === docId);
      if (!unitToAdd) return {};

      return {
        selectedUnits: [
          ...state.selectedUnits,
          { ...unitToAdd, checked: true },
        ],
      };
    }),

  setUnitsToSelect: (docsIds: string[]) =>
    set(() => ({
      unitsToSelect: docsIds.map((docId) => ({
        docId,
        checked: false,
      })),
    })),

  setRandomUnitsCounter: (value: number) =>
    set(() => ({
      randomUnitsCounter: Math.min(30, Math.max(1, value)),
    })),
}));
