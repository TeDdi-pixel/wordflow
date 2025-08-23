import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import UserTerms from "@/shared/model/schemas/UserTerms";
import { UserResults } from "@/shared/model/types/user-results";
import mongoose from "mongoose";

export const getUserHistoryUnitSets = async (userId: string) => {
  await createDbConnection();

  const userPreviousUnitSets = await UserTerms.find({ relatedUserId: userId });

  const unitSetIdsSet = new Set<string>();
  userPreviousUnitSets.forEach((unitSet: UserResults) => {
    unitSet.terms.forEach((term) => {
      unitSetIdsSet.add(term.unitSetId);
    });
  });

  const unitSetIdsArray = Array.from(unitSetIdsSet).map(
    (id) => new mongoose.Types.ObjectId(id)
  );

  const historyUnitSets = await UnitSet.find({
    _id: { $in: unitSetIdsArray },
  });

  return historyUnitSets || [];
};
