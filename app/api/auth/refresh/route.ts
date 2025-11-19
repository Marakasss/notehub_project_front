import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { api } from "../../api";
import { AxiosError } from "axios";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;
    const sessionId = cookieStore.get("sessionId")?.value;

    if (accessToken) {
      return NextResponse.json({});
    }

    if (!refreshToken || !sessionId) {
      return NextResponse.json({ error: "NO_REFRESH" }, { status: 401 });
    }

    const cookieHeader = `refreshToken=${refreshToken}; sessionId=${sessionId}`;

    const apiRes = await api.post(
      "auth/refresh",
      {},
      {
        headers: { Cookie: cookieHeader },
      }
    );

    const res = NextResponse.json({ ok: true });

    const setCookies = apiRes.headers["set-cookie"];
    if (setCookies) {
      for (const cookieStr of Array.isArray(setCookies)
        ? setCookies
        : [setCookies]) {
        res.headers.append("Set-Cookie", cookieStr);
      }
    }

    return res;
  } catch (err) {
    const error = err as AxiosError<{ error: string }>;
    return NextResponse.json(
      {
        error: error.response?.data.error || "Something went wrong",
      },
      { status: error.response?.status || 500 }
    );
  }
}
