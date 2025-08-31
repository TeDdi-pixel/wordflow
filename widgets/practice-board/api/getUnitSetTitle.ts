import UnitSet from "@/shared/model/schemas/UnitSet";

export const getUnitSetTitle = async (unitSetId: string) => {
  const unitSet = await UnitSet.findById(unitSetId).select("title -_id");

  return unitSet.title || null;
};
