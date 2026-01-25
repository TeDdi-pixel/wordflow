import { create } from "zustand";
import { TypeBurgerMenuStore } from "../model/types/burger-menu-store";

export const useBurgerMenuStore = create<TypeBurgerMenuStore>((set) => ({
  isOpened: false,

  openBurgerMenu: () => set({ isOpened: true }),
  closeBurgerMenu: () => set({ isOpened: false }),
}));
