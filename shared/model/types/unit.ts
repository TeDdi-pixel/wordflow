export type TypeUnit = {
  unitId: number;
  term: string;
  definition: string;
};

export type UnitSetType = "cards";

export type TypeUnitForm = {
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
