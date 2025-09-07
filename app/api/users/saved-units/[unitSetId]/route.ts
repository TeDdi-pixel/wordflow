import createDbConnection from "@/shared/lib/mongoose";
import { getUserId } from "@/shared/lib/session";
import SavedWord from "@/shared/model/schemas/SavedUnit";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _req: NextRequest,
  { params }: { params: Promise<{ unitSetId: string }> }
) => {
  const { unitSetId } = await params;

  const relatedUserId = await getUserId();

  if (!relatedUserId)
    return NextResponse.json(
      {
        ok: false,
        message:
          "Неавторизований доступ. Будь ласка, увійдіть в акаунт повторно.",
      },
      { status: 401 }
    );

  if (!unitSetId) {
    return NextResponse.json(
      { ok: false, message: "Недостатньо даних" },
      { status: 400 }
    );
  }

  try {
    await createDbConnection();

    const dbUnitsIds = await SavedWord.find({
      unitSetId,
      relatedUserId,
    }).select("unitId -_id");

    const savedUnitsIds = [] as string[];

    dbUnitsIds.forEach((item) => {
      savedUnitsIds.push(item.unitId);
    });

    return NextResponse.json({ ok: true, savedUnitsIds });
  } catch (error) {
    console.error("Like GET error:", error);
    return NextResponse.json(
      { ok: false, message: "Помилка сервера" },
      { status: 500 }
    );
  }
};
