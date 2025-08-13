import { TypeUnit } from "./unit";

export type TempStore = {
  unitSetTitle: string;
  unitSetDescription: string;
  units: TypeUnit[];
  currentUnitId: string;

  setUnitSetTitle: (title: string) => void;
  setUnitSetDescription: (description: string) => void;
  setUnitTerm: (term: string) => void;
  setUnitDefinition: (description: string) => void;
  addUnit: () => void;
  removeUnit: () => void;
  reorderUnits: (oldIndex: number, newIndex: number) => void;
  resetTempStore: () => void;
  setCurrentUnitId: (id: string) => void;
};
