import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { SessionUser } from "../lib/types/types";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(encodedKey);
}

export async function decrypt(session = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
    console.log(error);
  }
}

export const logout = async () => {
  (await cookies()).set("session", "", { expires: new Date(0) });
};

// export async function createSession(userId: string) {
//   const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
//   const session = await encrypt({ userId, expires });
//   const cookieStore = await cookies();

//   cookieStore.set("session", session, {
//     httpOnly: true,
//     secure: true,
//     expires: expires,
//     sameSite: "lax",
//   });
// }

export const checkForSession = async () => {
  const session = (await cookies()).get("session")?.value;
  return !!session;
};

export async function getSession() {
  const session = (await cookies()).get("session")?.value;

  if (!session) return null;
  return await decrypt(session);
}

export async function createSession(user: SessionUser) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt(user);

  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: true,
    expires,
    sameSite: "lax",
  });
}

export async function updateCookies(updatedUser: SessionUser) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const session = await encrypt({ ...updatedUser, expires });

  try {
    (await cookies()).set("session", session, {
      httpOnly: true,
      secure: true,
      expires: expires,
      sameSite: "lax",
      path: "/",
    });
  } catch (error) {
    console.error("Error setting cookies:", error);
  }
}

export const updateSession = async (request: NextRequest) => {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  if (!parsed) {
    throw new Error("Error while parsing session");
  }
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    secure: true,
    expires: parsed.expires as Date,
  });
  return res;
};
