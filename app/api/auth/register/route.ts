import { NextRequest, NextResponse } from "next/server";

import { api } from "../../api";
import { AxiosError } from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const apiRes = await api.post("auth/register", body);

    const setCookieHeader = apiRes.headers["set-cookie"];
    const res = NextResponse.json(apiRes.data, { status: apiRes.status });

    if (setCookieHeader) {
      const setCookies = apiRes.headers["set-cookie"];
      if (setCookies) {
        for (const cookieStr of Array.isArray(setCookies)
          ? setCookies
          : [setCookies]) {
          res.headers.append("Set-Cookie", cookieStr);
        }
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
