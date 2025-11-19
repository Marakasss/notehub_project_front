import { NextRequest, NextResponse } from "next/server";

import { parse } from "cookie";
import { api } from "../../api";
import { AxiosError } from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const apiRes = await api.post("auth/register", body);

    const setCookieHeader = apiRes.headers["set-cookie"];
    const res = NextResponse.json(apiRes.data, { status: apiRes.status });

    if (setCookieHeader) {
      const cookieArray = Array.isArray(setCookieHeader)
        ? setCookieHeader
        : [setCookieHeader];

      for (const cookieStr of cookieArray) {
        const parsed = parse(cookieStr);

        if (parsed.accessToken)
          res.cookies.set("accessToken", parsed.accessToken, { path: "/" });
        if (parsed.refreshToken)
          res.cookies.set("refreshToken", parsed.refreshToken, {
            httpOnly: true,
            path: "/",
          });
        if (parsed.sessionId)
          res.cookies.set("sessionId", parsed.sessionId, {
            httpOnly: true,
            path: "/",
          });
      }
    }

    return res;
  } catch (err) {
    const error = err as AxiosError<{ error: string }>;
    return NextResponse.json(
      {
        error:
          error.response?.data.error || "blah blah blah something went wrong",
      },
      { status: error.response?.status || 500 }
    );
  }
}
