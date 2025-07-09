export type TypeUnit = {
  id: number;
  term: string;
  definition: string;
};
export type TypeUnitForm = {
  title: string;
  description: string;
  units: TypeUnit[];
  error: string;
};