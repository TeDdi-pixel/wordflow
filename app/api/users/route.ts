import createDbConnection from "@/shared/lib/mongoose";
import User from "@/shared/model/schemas/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  try {
    await createDbConnection();
    const user = await User.findOne({ email: body.email });

    if (!user || !user.password) {
      return null;
    }

    const isPasswordValid = bcrypt.compareSync(
      body.password as string,
      user.password
    );
    if (!isPasswordValid) return null;

    return NextResponse.json({
      ok: true,
      message: "Користувача знайдено",
      id: user._id.toString(),
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error("Ошибка в POST /api/users/create:", error);
    return NextResponse.json(
      { ok: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
