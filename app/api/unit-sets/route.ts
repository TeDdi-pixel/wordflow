import { getAllUnitSets } from "@/entities/unit-set/api/getAllUnitSets";
import { getUserId, getUserName } from "@/shared/lib/session";
import { AUTH_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import SavedUnit from "@/shared/model/schemas/SavedUnit";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { UnitCheck } from "@/shared/model/types/saved-units-store";
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

export const POST = async (req: NextRequest) => {
  const { limit, selectedUnits } = (await req.json()) as {
    limit: number;
    selectedUnits: UnitCheck[];
  };

  const isSelectiveUnitSet = selectedUnits.length > 0;

  const relatedUserId = await getUserId();
  const userName = await getUserName();

  if (!relatedUserId || !userName)
    return NextResponse.json({
      ok: false,
      message: AUTH_ERROR_MESSAGES.SESSION_NOT_FOUND,
    });

  const userUnitSetsCount = await UnitSet.countDocuments({
    relatedUserId,
    randomSavedUnitsSet: true,
  });

  let savedUnits = [];

  if (isSelectiveUnitSet) {
    savedUnits = await Promise.all(
      selectedUnits.map((doc) =>
        SavedUnit.findOne({
          relatedUserId: new mongoose.Types.ObjectId(relatedUserId),
          _id: new mongoose.Types.ObjectId(doc.docId),
        })
      )
    );
  } else {
    savedUnits = await SavedUnit.aggregate([
      { $match: { relatedUserId: new mongoose.Types.ObjectId(relatedUserId) } },
      { $sample: { size: limit } },
    ]);
  }

  savedUnits = savedUnits.filter(Boolean);

  if (!savedUnits || savedUnits.length === 0) {
    return NextResponse.json({ ok: false, message: "No saved units found" });
  }

  const unitsWithParent = await Promise.all(
    savedUnits.map(async (savedUnit) => {
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
      title: `${
        isSelectiveUnitSet ? "Вибіркових терміни" : "Випадкові терміни"
      } #${userUnitSetsCount + 1}`,
      description: isSelectiveUnitSet
        ? "Набір вибіркових термінів"
        : "Набір випадкових термінів",
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
