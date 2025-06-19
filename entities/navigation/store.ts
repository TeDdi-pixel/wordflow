import { create } from "zustand";

type DropdownStore = {
  isVisibleIndex: number | null;
  setIsVisibleIndex: (index: number | null) => void;
};

export const useDropdownStore = create<DropdownStore>((set) => ({
  isVisibleIndex: null,
  setIsVisibleIndex: (index) =>
    set((state) => ({
      isVisibleIndex: state.isVisibleIndex === index ? null : index,
    })),
}));
