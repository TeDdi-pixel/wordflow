import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";

export const getMyCardSets = async (userId: string) => {
  await createDbConnection();

  const userUnitSets = await UnitSet.find({
    relatedUserId: userId,
    unitSetType: "cards",
  });

  return userUnitSets || [];
};
