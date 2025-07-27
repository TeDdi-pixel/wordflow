import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type TypeUnit = {
  unitId: number;
  term: string;
  definition: string;
};

type TempStore = {
  unitSetTitle: string;
  unitSetDescription: string;
  items: TypeUnit[];
  setUnitSetTitle: (title: string) => void;
  setUnitSetDescription: (description: string) => void;
  setUnitTerm: (unitId: number, term: string) => void;
  setUnitDefinition: (unitId: number, description: string) => void;
  addUnit: () => void;
  removeUnit: (unitId: number) => void;
};

export const useTempStore = create<TempStore>()(
  subscribeWithSelector((set, get) => ({
    unitSetTitle: "",
    unitSetDescription: "",
    items: [
      { unitId: 1, term: "", definition: "" },
      { unitId: 2, term: "", definition: "" },
    ],

    setUnitSetTitle: (title: string) => set({ unitSetTitle: title }),

    setUnitSetDescription: (description: string) =>
      set({ unitSetDescription: description }),

    setUnitTerm: (unitId: number, term: string) => {
      set((state) => ({
        items: state.items.map((item) =>
          item.unitId === unitId ? { ...item, term } : item
        ),
      }));
    },

    setUnitDefinition: (unitId: number, definition: string) => {
      set((state) => ({
        items: state.items.map((item) =>
          item.unitId === unitId ? { ...item, definition } : item
        ),
      }));
    },

    addUnit: () =>
      set((state) => ({
        items: [
          ...state.items,
          { unitId: state.items.length + 1, term: "", definition: "" },
        ],
      })),

    removeUnit: (unitId: number) => {
      const filtered = get().items.filter((item) => item.unitId !== unitId);
      const reindexed = filtered.map((item, index) => ({
        ...item,
        unitId: index + 1,
      }));
      set({ items: reindexed });
    },
  }))
);
