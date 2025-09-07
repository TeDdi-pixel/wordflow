"use server";

import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";

export const getTargetLanguage = async (unitSetId: string) => {
  await createDbConnection();

  const unitSet = await UnitSet.findById(unitSetId).select("target -_id");

  return unitSet?.target;
};
