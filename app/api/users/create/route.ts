import createDbConnection from "@/shared/lib/mongoose";
import User from "@/shared/model/schemas/User";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { email, userName, provider } = await req.json();

    await createDbConnection();

    const userExists = await User.findOne({ email });

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
        username: userName,
        email,
        provider,
      });

      return NextResponse.json(
        {
          ok: true,
          message: "Користувач успішно створений",
          id: newUserDoc._id.toString(),
          username: newUserDoc.username,
        },
        { status: 200 }
      );
    } catch (err) {
      console.error("Помилка при ствоненні користувача:", err);
      return NextResponse.json(
        { ok: false, message: "Помилка при ствоненні користувача" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Помилка в POST /api/users/create:", error);
    return NextResponse.json(
      { ok: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
