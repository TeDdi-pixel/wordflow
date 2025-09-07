import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { toPlain } from "@/shared/utils/unit-set/toPlain";
import mongoose from "mongoose";

export const getMyCardSets = async (
  userId: string
): Promise<(TypeUnitSet & { unitsCount: number })[]> => {
  await createDbConnection();

  const unitSets = await UnitSet.aggregate([
    {
      $match: {
        relatedUserId: new mongoose.Types.ObjectId(userId),
        unitSetType: "cards",
      },
    },
    { $addFields: { unitsCount: { $size: "$units" } } },
    { $project: { units: 0 } },
  ]);

  return toPlain(unitSets) || [];
};
