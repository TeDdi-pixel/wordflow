import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { UnitSetType } from "@/shared/model/types/unit";

export const getCommunitySets = async (setType: UnitSetType) => {
  await createDbConnection();

  const unitSets = await UnitSet.find({
    unitSetType: setType,
  });

  return unitSets || [];
};
