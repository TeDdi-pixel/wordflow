import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type TypeUnit = {
  unitId: number;
  term: string;
  definition: string;
};

const initialState: Pick<
  TempStore,
  "unitSetTitle" | "unitSetDescription" | "items"
> = {
  unitSetTitle: "",
  unitSetDescription: "",
  items: [
    { unitId: 1, term: "", definition: "" },
    { unitId: 2, term: "", definition: "" },
  ],
};

type TempStore = {
  unitSetTitle: string;
  unitSetDescription: string;
  items: TypeUnit[];
  setUnitSetTitle: (title: string) => void;
  setUnitSetDescription: (description: string) => void;
  setUnitTerm: (unitId: number, term: string) => void;
  setUnitDefinition: (unitId: number, description: string) => void;
  addUnit: (currentUnitId: number) => void;
  removeUnit: (unitId: number) => void;
  reorderUnits: (oldIndex: number, newIndex: number) => void;
  resetTempStore: () => void;
};

const MAX_ITEMS_LENGTH = 30;

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

    addUnit: (currentUnitId: number) => {
      set((state) => {
        if (state.items.length >= MAX_ITEMS_LENGTH) return {};

        const reindexedItems = state.items
          .toSpliced(currentUnitId, 0, {
            unitId: 0,
            term: "",
            definition: "",
          })
          .map((item, index) => ({
            ...item,
            unitId: index + 1,
          }));

        return { items: reindexedItems };
      });
    },
    removeUnit: (unitId: number) => {
      const items = get().items;

      if (items.length <= 1) return {};

      const filtered = items.filter((item) => item.unitId !== unitId);
      const reindexed = filtered.map((item, index) => ({
        ...item,
        unitId: index + 1,
      }));
      set({ items: reindexed });
    },
    reorderUnits: (oldIndex: number, newIndex: number) => {
      set((state) => {
        const newItems = [...state.items];
        const [reorderedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, reorderedItem);

        const reindexedItems = newItems.map((item, index) => ({
          ...item,
          unitId: index + 1,
        }));

        return { items: reindexedItems };
      });
    },
    resetTempStore: () => {
      set({ ...initialState });
    },
  }))
);
