import { Language } from "./temp-store";
import { TypeUnit, UnitSetType } from "./unit";

export type TypeSavedUnit = {
  _id: string;
  source: Language;
  target: Language;
  title: string;
  unitSetId: string;
  unitSetType: UnitSetType;
  unit: Omit<TypeUnit, "meanings" | "proposedOption" | "termNumber">;
};
