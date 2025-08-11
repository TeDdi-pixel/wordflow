export type TypeTermStatus = "unlearned" | "learned" | "excluded";

export type TypeUnit = {
  _id: string;
  termNumber: number;
  term: string;
  definition: string;
};

export type UnitSetType = "cards";

export type TypeUnitSetForm = {
  type: "SUCCESS" | "ERROR" | string;
  title: string;
  description: string;
  units: TypeUnit[];
  error: string;
  unitSetType: UnitSetType;
};

export type TypeUnitSet = {
  authorsName: string;
  _id: string;
  title: string;
  description: string;
  unitSetType: "cards";
  units: TypeUnit[];
};
