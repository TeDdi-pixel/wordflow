import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ unitSetId: string }>;
  }
) => {
  const { unitSetId } = await params;

  if (!unitSetId) {
    return NextResponse.json(
      {
        ok: false,
        message: "Id набору не було отримано",
      },
      { status: 404 }
    );
  }

  if (!mongoose.Types.ObjectId.isValid(unitSetId)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Id набору має невалідний формат",
      },
      { status: 400 }
    );
  }

  try {
    await createDbConnection();

    const res = await UnitSet.deleteOne({ _id: unitSetId });

    if (res.deletedCount === 0) {
      return NextResponse.json(
        {
          ok: false,
          message: "Набір не знайдено",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Набір успішно видалено",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        ok: false,
        message: "Помилка сервера",
      },
      { status: 500 }
    );
  }
};
