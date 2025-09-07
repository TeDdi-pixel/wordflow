import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { toPlain } from "@/shared/utils/unit-set/toPlain";
import mongoose from "mongoose";

export const getUnitSet = async (
  unitSetId: string
): Promise<TypeUnitSet | null> => {
  await createDbConnection();

  if (!mongoose.Types.ObjectId.isValid(unitSetId)) {
    return null;
  }

  const unitSet = await UnitSet.findById(unitSetId);

  return toPlain(unitSet) ?? null;
};
