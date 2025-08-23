import { TypeUnit } from "./unit";

export type TempStore = {
  unitSetTitle: string;
  unitSetDescription: string;
  units: TypeUnit[];
  currentUnitId: string;
  termLang: Language;
  definitionLang: Language;

  setUnitSetTitle: (title: string) => void;
  setUnitSetDescription: (description: string) => void;
  setUnitTerm: (term: string) => void;
  setUnitDefinition: (unitId: string, description: string) => void;
  addUnit: () => void;
  removeUnit: () => void;
  reorderUnits: (oldIndex: number, newIndex: number) => void;
  resetTempStore: () => void;
  setCurrentUnitId: (id: string) => void;
  getUnits: () => TypeUnit[];
  setTermLang: (tLang: Language) => void;
  setDefinitionLang: (dLang: Language) => void;
  setProposedOption: (unitId: string, option: string) => void;
  getProposedOption: (unitId: string) => string;
  isDefinitionSet: (unitId: string) => boolean;
};

export type Language = "UA" | "ENG" | "RU";
