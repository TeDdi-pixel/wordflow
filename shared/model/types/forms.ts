import { UnitSetType } from "./unit";

export type BaseFields = {
  status: "SUCCESS" | "ERROR" | string;
  unitSetType?: UnitSetType;
  error: string;
};
