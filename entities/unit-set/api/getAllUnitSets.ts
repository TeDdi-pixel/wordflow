import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";

export const getAllUnitSets = async () => {
  await createDbConnection();

  const unitSets = await UnitSet.find({});

  return unitSets || [];
};
