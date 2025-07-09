import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type TypeUnit = {
  id: number;
  term: string;
  definition: string;
};

type TempStore = {
  unitSetTitle: string;
  unitSetDescription: string;
  items: TypeUnit[];
  setUnitSetTitle: (title: string) => void;
  setUnitSetDescription: (description: string) => void;
  setUnitTerm: (id: number, term: string) => void;
  setUnitDefinition: (id: number, description: string) => void;
  addUnit: () => void;
  removeUnit: (id: number) => void;
};

export const useTempStore = create<TempStore>()(
  subscribeWithSelector((set, get) => ({
    unitSetTitle: "",
    unitSetDescription: "",
    items: [
      { id: 1, term: "", definition: "" },
      { id: 2, term: "", definition: "" },
    ],

    setUnitSetTitle: (title: string) => set({ unitSetTitle: title }),

    setUnitSetDescription: (description: string) =>
      set({ unitSetDescription: description }),

    setUnitTerm: (id: number, term: string) => {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id ? { ...item, term } : item
        ),
      }));
    },

    setUnitDefinition: (id: number, definition: string) => {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id ? { ...item, definition } : item
        ),
      }));
    },

    addUnit: () =>
      set((state) => ({
        items: [
          ...state.items,
          { id: state.items.length + 1, term: "", definition: "" },
        ],
      })),

    removeUnit: (id: number) => {
      const filtered = get().items.filter((item) => item.id !== id);
      const reindexed = filtered.map((item, index) => ({
        ...item,
        id: index + 1,
      }));
      set({ items: reindexed });
    },
  }))
);
