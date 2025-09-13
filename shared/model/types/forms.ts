import { UnitSetType } from "./unit";

export type BaseFields = {
  operationType: "SUCCESS" | "ERROR" | string;
  unitSetType?: UnitSetType;
  error: string;
};
