import createDbConnection from "@/shared/lib/mongoose";
import User from "@/shared/model/schemas/User";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    await createDbConnection();

    const userExists = await User.findOne({ email: body.email });

    if (userExists) {
      return NextResponse.json(
        {
          ok: true,
          message: "Користувач вже існує",
          id: userExists._id.toString(),
        },
        { status: 200 }
      );
    }

    try {
      const newUserDoc = await User.create({
        username: body.userName,
        email: body.email,
        provider: body.provider,
      });
      return NextResponse.json(
        {
          ok: true,
          message: "Користувач успішно створений",
          id: newUserDoc._id.toString(),
        },
        { status: 200 }
      );
    } catch (err) {
      console.error("Помилка при ствоненні користувача:", err);
    }
  } catch (error) {
    console.error("Ошибка в POST /api/users/create:", error);
    return NextResponse.json(
      { ok: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
