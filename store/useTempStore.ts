import { MAX_ITEMS_LENGTH } from "@/shared/model/constants/units";
import { TempStore } from "@/shared/model/types/temp-store";
import { arrayMove } from "@dnd-kit/sortable";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

const initialUnitSet: Pick<
  TempStore,
  "unitSetTitle" | "unitSetDescription" | "units"
> = {
  unitSetTitle: "",
  unitSetDescription: "",
  units: [
    { _id: crypto.randomUUID(), termNumber: 1, term: "", definition: "" },
    { _id: crypto.randomUUID(), termNumber: 2, term: "", definition: "" },
  ],
};

export const useTempStore = create<TempStore>()(
  subscribeWithSelector((set, get) => ({
    currentUnitId: "",
    unitSetTitle: "",
    unitSetDescription: "",
    units: [
      { _id: crypto.randomUUID(), termNumber: 1, term: "", definition: "" },
      { _id: crypto.randomUUID(), termNumber: 2, term: "", definition: "" },
    ],

    setCurrentUnitId: (id: string) => set({ currentUnitId: id }),
    setUnitSetTitle: (title: string) => set({ unitSetTitle: title }),

    setUnitSetDescription: (description: string) =>
      set({ unitSetDescription: description }),

    setUnitTerm: (term: string) => {
      set((state) => ({
        units: state.units.map((unit) =>
          unit._id === state.currentUnitId ? { ...unit, term } : unit
        ),
      }));
    },

    setUnitDefinition: (definition: string) => {
      set((state) => ({
        units: state.units.map((unit) =>
          unit._id === state.currentUnitId ? { ...unit, definition } : unit
        ),
      }));
    },

    addUnit: () => {
      set((state) => {
        if (state.units.length >= MAX_ITEMS_LENGTH) return {};

        const insertAt = (() => {
          const currentIdUnitId = state.currentUnitId;
          if (!currentIdUnitId) return state.units.length;

          const foundIndex = state.units.findIndex(
            (u) => u._id === currentIdUnitId
          );
          return foundIndex === -1 ? state.units.length : foundIndex + 1;
        })();

        const reindexedItems = state.units
          .toSpliced(insertAt, 0, {
            _id: crypto.randomUUID(),
            termNumber: 0,
            term: "",
            definition: "",
          })
          .map((unit, index) => ({
            ...unit,
            termNumber: index + 1,
          }));

        return { units: reindexedItems, currentUnitId: "" };
      });
    },
    removeUnit: () =>
      set((state) => {
        const units = get().units;

        if (units.length <= 1) {
          return { units, currentUnitId: "" };
        }

        const filtered = units.filter(
          (unit) => unit._id !== state.currentUnitId
        );
        const reindexed = filtered.map((unit, index) => ({
          ...unit,
          termNumber: index + 1,
        }));
        return { units: reindexed, currentUnitId: "" };
      }),
    reorderUnits: (oldIndex: number, newIndex: number) => {
      set((state) => {
        const newItems = arrayMove(state.units, oldIndex, newIndex).map(
          (unit, index) => ({
            ...unit,
            termNumber: index + 1,
          })
        );

        return { units: newItems };
      });
    },
    resetTempStore: () => {
      set({ ...initialUnitSet });
    },
    getUnits: () => get().units,
  }))
);
