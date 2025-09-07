import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { toPlain } from "@/shared/utils/unit-set/toPlain";
import mongoose from "mongoose";

export const getControlsUnitSetData = async (unitSetId: string) => {
  await createDbConnection();
  if (!mongoose.Types.ObjectId.isValid(unitSetId)) {
    return null;
  }

  const unitSet = await UnitSet.findById(unitSetId).select(
    "units likesCount savedUnitsCount -_id"
  );

  return toPlain(unitSet) ?? null;
};
