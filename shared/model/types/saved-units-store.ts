export type TypeSavedUnitsStore = {
  savedUnitsCounts: { unitSetId: string; count: number }[];
  randomUnitsCounter: number;

  setSavedUnitsCounts: (unitSetId: string, count: number) => void;
  setRandomUnitsCounter: (value: number) => void;
};
