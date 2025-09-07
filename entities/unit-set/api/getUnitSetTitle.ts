import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import mongoose from "mongoose";

export const getUnitSetTitle = async (unitSetId: string) => {
  await createDbConnection();

  if (!mongoose.Types.ObjectId.isValid(unitSetId)) {
    return null;
  }

  const unitSet = await UnitSet.findById(unitSetId).select("title -_id");

  return unitSet.title ?? null;
};
