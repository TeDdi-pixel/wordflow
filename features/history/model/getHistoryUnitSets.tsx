import createDbConnection from "@/shared/lib/mongoose";
import { checkForSession, getUserId } from "@/shared/lib/session";
import UnitSet from "@/shared/model/schemas/UnitSet";
import UserTerms from "@/shared/model/schemas/UserTerms";
import { TypeUserTerms } from "@/shared/model/types/user-terms";
import mongoose from "mongoose";
import { notFound, redirect } from "next/navigation";

export const getHistoryUnitSets = async () => {
  const isSession = await checkForSession();
  if (!isSession) redirect("/login");

  await createDbConnection();

  const relatedUserId = await getUserId();

  if (!relatedUserId) redirect("/login");
  const userPreviousUnitSets = await UserTerms.find({ relatedUserId });

  const unitSetIdsSet = new Set<string>();
  userPreviousUnitSets.forEach((unitSet: TypeUserTerms) => {
    unitSet.terms.forEach((term) => {
      unitSetIdsSet.add(term.unitSetId);
    });
  });

  const unitSetIdsArray = Array.from(unitSetIdsSet).map(
    (id) => new mongoose.Types.ObjectId(id)
  );

  const unitSets = await UnitSet.find({
    _id: { $in: unitSetIdsArray },
  });

  if (!unitSets || unitSets.length === 0) notFound();

  return unitSets;
};
