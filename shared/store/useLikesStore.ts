import { create } from "zustand";
import { TypeLikesStore } from "../model/types/likes-store";

export const useLikesStore = create<TypeLikesStore>((set) => ({
  likesCounts: [],

  setLikesCounts: (unitSetId: string, count: number) =>
    set((state) => {
      return {
        likesCounts: [...state.likesCounts, { unitSetId, count }],
      };
    }),
}));
