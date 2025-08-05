import { create } from "zustand";

export type CheckStatus = "MISTAKE" | "CORRECTNESS" | "";
export type FeatureName = "bookmark" | "star" | "sound" | "tip";

type UnitStore = {
  termNumber: number;
  unitsLength: number;
  answer: string;
  checkStatus: CheckStatus;
  activeFeatures: FeatureName[];

  // Actions
  setAnswer: (answer: string) => void;
  setPrevTerm: () => void;
  setNextTerm: () => void;
  setUnitsLength: (length: number) => void;
  setCheckStatus: (status: CheckStatus) => void;
  resetCheckStatus: () => void;
  resetAnswer: () => void;
  toggleFeature: (featureName: FeatureName) => void;
  isFeatureActive: (featureName: FeatureName) => boolean;
  resetAllFeatures: () => void;
};

export const useUnitStore = create<UnitStore>((set, get) => ({
  unitsLength: 1,
  termNumber: 0,
  answer: "",
  checkStatus: "",
  activeFeatures: [],

  setCheckStatus: (status) => set({ checkStatus: status }),
  resetCheckStatus: () => set({ checkStatus: "" }),

  setAnswer: (answer) => set({ answer: answer.toLowerCase().trim() }),
  resetAnswer: () => set({ answer: "" }),

  setUnitsLength: (length) => set({ unitsLength: Math.max(1, length) }),

  setPrevTerm: () =>
    set((state) => ({
      termNumber: Math.max(0, state.termNumber - 1),
    })),

  setNextTerm: () =>
    set((state) => ({
      termNumber: Math.min(state.unitsLength - 1, state.termNumber + 1),
    })),

  toggleFeature: (featureName) =>
    set((state) => ({
      activeFeatures: state.activeFeatures.includes(featureName)
        ? state.activeFeatures.filter((f) => f !== featureName)
        : [...state.activeFeatures, featureName],
    })),

  isFeatureActive: (featureName) => get().activeFeatures.includes(featureName),

  resetAllFeatures: () => set({ activeFeatures: [] }),
}));
