import { api } from "@/app/api/api";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

//##########################################################################

export async function GET(request: Request) {
  try {
    const { data } = await api.get("/auth/get-oauth-url");

    return NextResponse.json(data);
  } catch (err) {
    const error = err as AxiosError<{ error: string }>;
    return NextResponse.json(
      {
        error: error.response?.data.error || "Something went wrong. ",
      },
      { status: error.response?.status || 500 }
    );
  }
}
