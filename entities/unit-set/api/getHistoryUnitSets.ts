import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import UsersResults from "@/shared/model/schemas/UsersResults";
import { UserResults } from "@/shared/model/types/user-results";
import mongoose from "mongoose";

export const getUserHistoryUnitSets = async (userId: string) => {
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

  const historyUnitSets = await UnitSet.find({
    _id: { $in: unitSetIdsArray },
  });

  return historyUnitSets || [];
};
