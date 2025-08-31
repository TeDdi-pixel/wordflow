import createDbConnection from "@/shared/lib/mongoose";
import User from "@/shared/model/schemas/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { AUTH_ERROR_MESSAGES } from "@/shared/model/constants/errors";

export const POST = async (req: NextRequest) => {
  const { password, email } = await req.json();

  try {
    await createDbConnection();
    const user = await User.findOne({ email });

    if (user && user.provider === "google") {
      return NextResponse.json({
        ok: false,
        message: AUTH_ERROR_MESSAGES.EMAIL_REGISTERED_WITH_PROVIDER.replace(
          "{provider}",
          "Google"
        ),
      });
    }

    if (user && user.provider === "credentials") {
      return NextResponse.json({
        ok: true,
        message: "Login successful",
        id: user._id.toString(),
        username: user.username,
      });
    }

    if (!user || !user.password) {
      return NextResponse.json({
        ok: false,
        message: AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
      });
    }

    const isPasswordValid = bcrypt.compareSync(
      password as string,
      user.password
    );

    if (!isPasswordValid) {
      return NextResponse.json({
        ok: false,
        message: AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
      });
    }

    return NextResponse.json({
      ok: true,
      message: "Login successful",
      id: user._id.toString(),
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error("Ошибка в POST /api/users:", error);
    return NextResponse.json(
      { ok: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
