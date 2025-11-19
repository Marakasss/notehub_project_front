// middleware.ts

import { NextRequest, NextResponse } from "next/server";
import { checkServerSession } from "@/lib/api/serverApi";

const privateRoutes = ["/profile", "/notes"];
const publicRoutes = ["/sign-in", "/sign-up"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;
  const sessionId = request.cookies.get("sessionId")?.value;

  const isPublic = publicRoutes.some((r) => pathname.startsWith(r));
  const isPrivate = privateRoutes.some((r) => pathname.startsWith(r));

  // --- НЕМАЄ ACCESS TOKEN ---
  if (!accessToken) {
    // Є refresh → пробуємо оновити
    if (refreshToken && sessionId) {
      const cookieHeader = request.headers.get("cookie");

      let data;
      try {
        data = await checkServerSession(cookieHeader);
        // refresh успішний → беремо нові куки
        const setCookies = data.headers["set-cookie"];
        const response = NextResponse.redirect(new URL(request.url));

        if (setCookies) {
          for (const cookie of Array.isArray(setCookies)
            ? setCookies
            : [setCookies]) {
            response.headers.append("Set-Cookie", cookie);
          }
        }

        return response;
      } catch {
        // refresh не вдалий
        if (isPrivate) return NextResponse.redirect(new URL("/", request.url));
        return NextResponse.next();
      }
    }

    // --- НЕМАЄ refresh або sessionId ---
    if (isPublic) return NextResponse.next();
    if (isPrivate) return NextResponse.redirect(new URL("/", request.url));
  }

  // --- Є accessToken ---
  if (isPublic) return NextResponse.redirect(new URL("/", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/notes/:path*", "/sign-in", "/sign-up"],
};
