import { create } from "zustand";
import { TypeNavigationStore } from "../model/types/navigation-store";

export const useNavigationStore = create<TypeNavigationStore>((set) => ({
  isOpened: false,

  setIsOpened: () => set({ isOpened: true }),
  closeOptions: () => set({ isOpened: false }),
}));
