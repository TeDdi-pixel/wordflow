import createDbConnection from "@/shared/lib/mongoose";
import { getUserId } from "@/shared/lib/session";
import Like from "@/shared/model/schemas/Like";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _req: NextRequest,
  { params }: { params: Promise<{ unitSetId: string }> }
) => {
  try {
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

    await createDbConnection();

    const like = await Like.findOne({ unitSetId, relatedUserId });

    return NextResponse.json({ ok: true, liked: !!like });
  } catch (error) {
    console.error("Like GET error:", error);
    return NextResponse.json(
      { ok: false, message: "Помилка сервера" },
      { status: 500 }
    );
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ unitSetId: string }> }
) => {
  try {
    const { unitSetId } = await params;

    const relatedUserId = await getUserId();

    if (!relatedUserId || !unitSetId) {
      return NextResponse.json(
        { ok: false, message: "Недостатньо даних для виконання операції" },
        { status: 400 }
      );
    }

    await createDbConnection();

    await Like.create({ relatedUserId, unitSetId });

    const res = await UnitSet.findOneAndUpdate(
      { _id: unitSetId },
      { $inc: { likesCount: 1 } },
      { new: true }
    ).select("likesCount -_id");

    return NextResponse.json(
      { ok: true, message: "Лайк збережено", newLikesCount: res.likesCount },
      { status: 201 }
    );
  } catch (err) {
    const error = err as { code?: number; message?: string };

    console.error("Like POST error:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        { ok: false, message: "Лайк вже існує" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { ok: false, message: "Помилка сервера" },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ unitSetId: string }> }
) => {
  try {
    const { unitSetId } = await params;

    const relatedUserId = await getUserId();

    if (!relatedUserId || !unitSetId) {
      return NextResponse.json(
        { ok: false, message: "Недостатньо даних для виконання операції" },
        { status: 400 }
      );
    }

    await createDbConnection();

    await Like.findOneAndDelete({ relatedUserId, unitSetId });

    const res = await UnitSet.findOneAndUpdate(
      { _id: unitSetId, likesCount: { $gt: 0 } },
      { $inc: { likesCount: -1 } },
      { new: true }
    ).select("likesCount -_id");

    return NextResponse.json(
      { ok: true, message: "Лайк видалено", newLikesCount: res.likesCount },
      { status: 200 }
    );
  } catch (error) {
    console.error("Like DELETE error:", error);
    return NextResponse.json(
      { ok: false, message: "Помилка сервера" },
      { status: 500 }
    );
  }
};
