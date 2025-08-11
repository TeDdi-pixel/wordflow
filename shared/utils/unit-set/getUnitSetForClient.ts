import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { TypeUnit, TypeUnitSet } from "@/shared/model/types/unit";

export const getUnitSetForClient = async (id: string) => {
  await createDbConnection();

  const unitSet = await UnitSet.findById(id).lean<TypeUnitSet>();

  if (!unitSet) {
    return null;
  }

  return {
    _id: unitSet._id.toString(),
    title: unitSet.title,
    description: unitSet.description,
    units: unitSet.units.map((unit: TypeUnit) => ({
      _id: unit._id.toString(),
      termNumber: unit.termNumber,
      term: unit.term,
      definition: unit.definition,
    })),
  };
};
