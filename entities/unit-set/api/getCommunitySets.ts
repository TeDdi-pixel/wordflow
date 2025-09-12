import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { TypeUnitSet, UnitSetType } from "@/shared/model/types/unit";
import { toPlain } from "@/shared/utils/unit-set/toPlain";

export const getCommunitySets = async (
  setType: UnitSetType
): Promise<TypeUnitSet[]> => {
  await createDbConnection();

  const unitSets = await UnitSet.find({
    unitSetType: setType,
    randomSavedUnitsSet: false,
    isPrivate: false,
  });

  return toPlain(unitSets) || [];
};
