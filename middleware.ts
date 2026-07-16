import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const admin = request.cookies.get("admin");

  const { pathname } = request.nextUrl;

  // Protect only /admin
  if (pathname.startsWith("/admin")) {
    if (!admin) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};