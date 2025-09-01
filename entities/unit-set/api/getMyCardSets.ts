import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import mongoose from "mongoose";

export const getMyCardSets = async (userId: string) => {
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

  return unitSets || [];
};
