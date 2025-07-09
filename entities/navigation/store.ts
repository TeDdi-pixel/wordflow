import { create } from "zustand";

type NavStore = {
  activeItemId: number | null;
  isVisibleIndex: number | null;
  setIsVisibleIndex: (index: number | null) => void;
  setActiveItem: (id: number | null) => void;
};

export const useNavStore = create<NavStore>((set) => ({
  activeItemId: null,
  isVisibleIndex: null,
  setIsVisibleIndex: (index) =>
    set((state) => ({
      isVisibleIndex: state.isVisibleIndex === index ? null : index,
    })),
  setActiveItem: (id) =>
    set({
      activeItemId: id,
    }),
}));
