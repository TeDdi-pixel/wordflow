import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { notFound } from "next/navigation";

export const getUnitSetForClient = async (unitSetId: string) => {
  await createDbConnection();

  const unitSet = await UnitSet.findById(unitSetId).lean<TypeUnitSet>();

  if (!unitSet || !unitSetId) notFound();

  const units = unitSet.units?.map((unit: any) => ({
    _id: unit._id.toString(),
    termNumber: unit.termNumber,
    term: unit.term,
    definition: unit.definition,
    meanings: (unit.meanings || []).map((m: any) => ({
      partOfSpeech: m.partOfSpeech || "",
      synonyms: m.synonyms || [],
      antonyms: m.antonyms || [],
      definitions: (m.definitions || []).map((d: any) => ({
        definition: d.definition || "",
        example: d.example || "",
        synonyms: d.synonyms || [],
        antonyms: d.antonyms || [],
      })),
    })),
    phonetic: unit.phonetic,
    audio: unit.audio,
  }));

  return {
    _id: unitSet._id.toString(),
    title: unitSet.title,
    source: unitSet.source,
    target: unitSet.target,
    description: unitSet.description,
    authorsName: unitSet.authorsName,
    unitSetType: unitSet.unitSetType,
    units,
  };
};
