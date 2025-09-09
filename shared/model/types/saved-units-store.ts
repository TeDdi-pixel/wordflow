export type TypeSavedUnitsStore = {
  savedUnitsCounts: { unitSetId: string; count: number }[];

  setSavedUnitsCounts: (unitSetId: string, count: number) => void;
};
