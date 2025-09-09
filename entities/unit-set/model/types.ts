import { TypeUnitSet } from "@/shared/model/types/unit";

export type TypeCardSetProps = Omit<
  TypeUnitSet,
  "_id" | "randomSavedUnitsSet" | "relatedUserId" | "units"
> & {
  unitSetId: string;
  unitsCount: number;
};
