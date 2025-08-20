import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const exceptions = [
    "/_next",
    "/api",
    "/favicon.ico",
    "/manifest.webmanifest",
    "/icon.ico",
    "/assets",
  ];

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
    "/tests-community",
  ];

  const session = await auth();

  if (!session && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
