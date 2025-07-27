import { create } from "zustand";

type UnitStore = {
  termNumber: number;
  unitsLength: number;
  answer: string;
  checkStatus: "MISTAKE" | "CORRECTNESS" | string;
  setAnswer: (answer: string) => void;
  setPrevTerm: () => void;
  setNextTerm: () => void;
  setUnitsLength: (length: number) => void;
  setCheckStatus: (status: "MISTAKE" | "CORRECTNESS") => void;
  resetCheckStatus: () => void;
  resetAnswer: () => void;
};

export const useUnitStore = create<UnitStore>((set) => ({
  unitsLength: 1,
  termNumber: 0,
  answer: "",
  checkStatus: "",
  setCheckStatus: (status: "MISTAKE" | "CORRECTNESS") =>
    set({ checkStatus: status }),
  resetCheckStatus: () => set({ checkStatus: "" }),
  setAnswer: (answer: string) => set({ answer: answer }),
  resetAnswer: () => set({ answer: "" }),
  setUnitsLength: (length: number) => set({ unitsLength: length }),
  setPrevTerm: () => set((state) => ({ termNumber: state.termNumber - 1 })),
  setNextTerm: () => set((state) => ({ termNumber: state.termNumber + 1 })),
}));
