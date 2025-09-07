import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import UsersResults from "@/shared/model/schemas/UsersResults";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { UserResults } from "@/shared/model/types/user-results";
import { toPlain } from "@/shared/utils/unit-set/toPlain";
import mongoose from "mongoose";

export const getUserHistoryUnitSets = async (
  userId: string
): Promise<(TypeUnitSet & { unitsCount: number })[]> => {
  await createDbConnection();

  const userPreviousUnitSets = await UsersResults.find({
    relatedUserId: userId,
  });

  const unitSetSetIds = new Set<string>();

  userPreviousUnitSets.forEach((unitSet: UserResults) => {
    unitSetSetIds.add(unitSet.unitSetId);
  });

  const unitSetIdsArray = Array.from(unitSetSetIds).map(
    (id) => new mongoose.Types.ObjectId(id)
  );

  const unitSets = await UnitSet.aggregate([
    {
      $match: {
        _id: { $in: unitSetIdsArray },
      },
    },
    { $addFields: { unitsCount: { $size: "$units" } } },
    { $project: { units: 0 } },
  ]);

  return toPlain(unitSets) || [];
};
