import { create } from "zustand";
import { TypeLikesStore } from "../model/types/likes-store";

export const useLikesStore = create<TypeLikesStore>((set) => ({
  likesCounts: [],

  setLikesCounts: (unitSetId: string, newCount: number) =>
    set((state) => {
      const existingUnit = state.likesCounts.find(
        (unit) => unit.unitSetId === unitSetId
      );

      return {
        likesCounts: existingUnit
          ? state.likesCounts.map((unit) =>
              unit.unitSetId === unitSetId
                ? { unitSetId, count: newCount }
                : unit
            )
          : [...state.likesCounts, { unitSetId, count: newCount }],
      };
    }),
}));
