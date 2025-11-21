import { api } from "@/app/api/api";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

//##########################################################################

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const apiRes = await api.post("/auth/confirm-oauth", body);
    const res = NextResponse.json(apiRes.data, { status: apiRes.status });
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
      { error: error.response?.data.error || "OAuth confirm error" },
      { status: error.response?.status || 500 }
    );
  }
}
