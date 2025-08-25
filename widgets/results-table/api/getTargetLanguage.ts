import UnitSet from "@/shared/model/schemas/UnitSet";

export const getTargetLanguage = async (unitSetId: string) => {
  const unitSet = await UnitSet.findById(unitSetId).select("target -_id");

  return unitSet?.target;
};
