import createDbConnection from "@/shared/lib/mongoose";
import { getUserId } from "@/shared/lib/session";
import SavedWord from "@/shared/model/schemas/SavedUnit";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { unitSetId, unitId } = await req.json();

  if (!unitSetId || !unitId) {
    return NextResponse.json(
      { ok: false, message: "Data about specific unit is missing" },
      { status: 400 }
    );
  }

  const relatedUserId = await getUserId();

  if (!relatedUserId) {
    return NextResponse.json(
      { ok: false, message: "User is not authenticated" },
      { status: 401 }
    );
  }

  try {
    await createDbConnection();

    await SavedWord.create({
      relatedUserId,
      unitSetId,
      unitId,
    });

    const res = await UnitSet.findByIdAndUpdate(
      { _id: unitSetId },
      {
        $inc: { savedUnitsCount: 1 },
      },
      { new: true }
    ).select("savedUnitsCount -_id");

    return NextResponse.json({
      ok: true,
      newSavedUnitsCount: res.savedUnitsCount,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, message: "Failed to save word" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  const { unitSetId, unitId } = await req.json();

  if (!unitSetId || !unitId) {
    return NextResponse.json(
      { ok: false, message: "Data about specific unit is missing" },
      { status: 400 }
    );
  }

  const relatedUserId = await getUserId();

  if (!relatedUserId) {
    return NextResponse.json(
      { ok: false, message: "User is not authenticated" },
      { status: 401 }
    );
  }

  try {
    await createDbConnection();

    await SavedWord.deleteOne({
      relatedUserId,
      unitSetId,
      unitId,
    });

    const res = await UnitSet.findOneAndUpdate(
      { _id: unitSetId, savedUnitsCount: { $gt: 0 } },
      { $inc: { savedUnitsCount: -1 } },
      { new: true }
    ).select("savedUnitsCount -_id");

    return NextResponse.json({
      ok: true,
      newSavedUnitsCount: res.savedUnitsCount,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, message: "Failed to delete word" },
      { status: 500 }
    );
  }
};
