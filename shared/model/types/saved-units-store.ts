export type UnitCheck = { docId: string; checked: boolean };

export type TypeSavedUnitsStore = {
  savedUnitsCounts: { unitSetId: string; count: number }[];
  randomUnitsCounter: number;
  selectedUnits: UnitCheck[];
  unitsToSelect: UnitCheck[];
  savedUnits: string[];

  addSavedUnit: (unitId: string) => void;
  removeSavedUnit: (unitId: string) => void;
  unSelectAll: () => void;
  selectFirstThirtyUnits: () => void;
  checkSelectedUnit: (docId: string) => void;
  setUnitsToSelect: (docsIds: string[]) => void;
  setSavedUnitsCounts: (unitSetId: string, count: number) => void;
  setRandomUnitsCounter: (value: number) => void;
};
