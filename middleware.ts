import { checkForSession, updateSession } from "@/shared/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const exceptions = ["/_next", "/api", "/favicon", "/assets"];

  const isException = exceptions.some((prefix) => pathname.startsWith(prefix));

  if (isException) {
    return NextResponse.next();
  }

  const publicPaths = [
    "/",
    "/login",
    "/card-sets-community",
    "/memorize-sets-community",
    "/selection-sets-community",
    "/test-community",
  ];

  const isPublic = publicPaths.includes(pathname);
  const isSession = await checkForSession();

  if (!isPublic && !isSession) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return await updateSession(request);
}
