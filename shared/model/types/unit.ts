export type TypeUnit = {
  unitId: number;
  term: string;
  definition: string;
};
export type TypeUnitForm = {
  type: "SUCCESS" | "ERROR" | string;
  title: string;
  description: string;
  units: TypeUnit[];
  error: string;
};

export type TypeUnitSet = {
  _id: string;
  title: string;
  description: string;
  units: TypeUnit[];
};
