import {
  CheckStatus,
  PracticeStore,
  TypeCompletedUnit,
} from "@/shared/model/types/practice-store";
import { TypeUnit } from "@/shared/model/types/unit";
import { create } from "zustand";

export const usePracticeStore = create<PracticeStore>((set, get) => ({
  unitSetId: null,
  currentUnitId: null,
  completedTerms: [],
  termNumber: 0,
  newAnswer: null,
  oldAnswer: "",
  checkStatus: "",
  localCheckStatus: "",
  activeFeatures: [],
  isUnitSetCompleted: false,
  isPending: false,
  hasNewAnswer: false,

  setUnitSetId: (id: string) => set({ unitSetId: id }),

  setCurrentUnitId: (id: string) => set({ currentUnitId: id }),

  setCheckStatus: (status) => set({ checkStatus: status }),
  resetCheckStatus: () => set({ checkStatus: "" }),

  setLocalCheckStatus: (status) => set({ localCheckStatus: status }),

  resetLocalCheckStatus: () => set({ localCheckStatus: "" }),

  setNewAnswer: (value: string) =>
    set({
      newAnswer: value,
      hasNewAnswer: true,
    }),

  setOldAnswer: (value: string) =>
    set({ oldAnswer: value.toLowerCase().trim() }),

  resetNewAnswer: () => set({ newAnswer: null, hasNewAnswer: false }),

  setPrevTerm: () =>
    set((state) => ({
      termNumber: Math.max(0, state.termNumber - 1),
    })),

  setNextTerm: (unitsLength: number) =>
    set((state) => ({
      termNumber: Math.min(unitsLength - 1, state.termNumber + 1),
    })),

  setCompletedTerms: (
    units: TypeUnit[],
    termId: string,
    checkStatus: CheckStatus,
    lastAnswer: string
  ) => {
    return set((state) => {
      let completedTerms = state.completedTerms.length
        ? [...state.completedTerms]
        : units.map(
            ({ _id }): TypeCompletedUnit => ({
              termId: _id,
              checkStatus: "",
              lastAnswer: "",
            })
          );

      const termIndex = completedTerms.findIndex((t) => t.termId === termId);

      if (termIndex !== -1) {
        completedTerms[termIndex] = {
          ...completedTerms[termIndex],
          checkStatus,
          lastAnswer,
        };
      }

      return { completedTerms };
    });
  },

  resetCompletedTerms: () => set({ completedTerms: [] }),
  resetTermNumber: () => set({ termNumber: 0 }),

  toggleFeature: (featureName) =>
    set((state) => ({
      activeFeatures: state.activeFeatures.includes(featureName)
        ? state.activeFeatures.filter((f) => f !== featureName)
        : [...state.activeFeatures, featureName],
    })),

  isFeatureActive: (featureName) => get().activeFeatures.includes(featureName),

  resetAllFeatures: () => set({ activeFeatures: [] }),

  skipTerm: (termId: string | null, units: TypeUnit[]) =>
    set((state) => {
      if (!termId) return {};

      const currentAnswer = state.newAnswer;

      let completedTerms = state.completedTerms.length
        ? [...state.completedTerms]
        : units.map(
            ({ _id }): TypeCompletedUnit => ({
              termId: _id,
              checkStatus: "",
              lastAnswer: "",
            })
          );
      return {
        completedTerms: [
          ...completedTerms.filter((t) => t.termId !== termId),
          { termId, checkStatus: "EXCLUDED", lastAnswer: currentAnswer ?? "" },
        ],
      };
    }),

  setIsUnitSetCompleted: (value: boolean) => set({ isUnitSetCompleted: value }),

  setIsPending: (value: boolean) => set({ isPending: value }),
  setHasNewAnswer: (value: boolean) => set({ hasNewAnswer: value }),
}));
