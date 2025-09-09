import { getAllUnitSets } from "@/entities/unit-set/api/getAllUnitSets";
import { getUserId, getUserName } from "@/shared/lib/session";
import SavedUnit from "@/shared/model/schemas/SavedUnit";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { TypeSort } from "@/shared/model/types/types";
import { TypeUnit } from "@/shared/model/types/unit";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const sort = (await req.nextUrl.searchParams.get("sort")) || "createdAsc";
  const limit = await req.nextUrl.searchParams.get("limit");
  const limitNum = parseInt(limit ?? "9", 10);

  const { unitSets } = await getAllUnitSets(sort as TypeSort, limitNum);
  return NextResponse.json({ unitSets });
};

export const POST = async () => {
  const relatedUserId = await getUserId();
  const userName = await getUserName();

  const userUnitSetsCount = await UnitSet.countDocuments({
    relatedUserId,
    randomSavedUnitsSet: true,
  });

  const randomSavedUnits = await SavedUnit.aggregate([
    { $match: { relatedUserId: new mongoose.Types.ObjectId(relatedUserId) } },
    { $sample: { size: 30 } },
  ]);

  if (!randomSavedUnits || randomSavedUnits.length === 0) {
    return NextResponse.json({ ok: false, message: "No saved units found" });
  }

  const unitsWithParent = await Promise.all(
    randomSavedUnits.map(async (savedUnit) => {
      const unitSet = await UnitSet.findOne(
        {
          _id: savedUnit.unitSetId,
          "units._id": savedUnit.unitId,
        },
        { "units.$": 1, unitSetType: 1, source: 1, target: 1 }
      );

      if (!unitSet) {
        return null;
      }
      if (!unitSet.units?.[0]) {
        return null;
      }

      const unit = unitSet.units[0] as TypeUnit;

      return {
        unit,
        unitSetInfo: {
          title: `Набір випадкових термінів #${userUnitSetsCount + 1}`,
          description: "Набір випадкових термінів",
          authorsName: userName,
          unitSetType: unitSet.unitSetType,
          source: unitSet.source,
          target: unitSet.target,
        },
      };
    })
  );

  const filtered = unitsWithParent.filter(Boolean);

  if (filtered.length === 0) {
    return NextResponse.json({ ok: false, message: "No units found" });
  }

  const savedUnitsLanguagesSet = new Set();

  const newUnits = filtered
    .map((item) => {
      if (!item || !item.unit || !item.unitSetInfo) return null;

      savedUnitsLanguagesSet.add(item.unitSetInfo.source);
      savedUnitsLanguagesSet.add(item.unitSetInfo.target);

      const u = item.unit;
      return {
        termNumber: u.termNumber,
        term: u.term,
        definition: u.definition,
        source: item.unitSetInfo.source,
        target: item.unitSetInfo.target,
        meanings: u.meanings || [],
        audio: u.audio || "",
        phonetic: u.phonetic || "",
      };
    })
    .filter(Boolean);

  try {
    const newUnitSet = await UnitSet.create({
      relatedUserId,
      title: `Випадкові терміни #${userUnitSetsCount + 1}`,
      authorsName: userName,
      unitSetType: "cards",
      units: newUnits,
      randomSavedUnitsSet: true,
      savedUnitsLanguages: Array.from(savedUnitsLanguagesSet),
    });
    return NextResponse.json({ ok: true, newUnitSet });
  } catch (err) {
    console.error("Error creating new UnitSet:", err);
    return NextResponse.json({ ok: false, message: "Error creating UnitSet" });
  }
};
