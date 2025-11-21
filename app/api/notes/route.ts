import { NextRequest, NextResponse } from "next/server";
import { api } from "../api";
import { cookies } from "next/headers";
import { AxiosError } from "axios";

//##########################################################################

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const search = request.nextUrl.searchParams.get("search") ?? "";
    const page = Number(request.nextUrl.searchParams.get("page") ?? 1);
    const rawTag = request.nextUrl.searchParams.get("tag") ?? "";
    const tag = rawTag === "All" ? "" : rawTag;
    const accessToken = cookieStore.get("accessToken")?.value;

    const { data } = await api("/notes", {
      params: {
        ...(search !== "" && { search }),
        page,
        perPage: 12,
        ...(tag && { tag }),
      },
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    if (data) {
      console.log("data", data);

      return NextResponse.json(data);
    }
  } catch (err) {
    const error = err as AxiosError<{ error: string }>;
    return NextResponse.json(
      { error: error.response?.data.error || "Failed to fetch notes" },
      { status: error.response?.status || 500 }
    );
  }
}

//##########################################################################

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const body = await request.json();

    const { data } = await api.post("notes", body, {
      headers: {
        authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (data) {
      return NextResponse.json(data, { status: 201 });
    }
  } catch (err) {
    const error = err as AxiosError<{ error: string }>;
    return NextResponse.json(
      { error: error.response?.data.error || "Failed to create notes" },
      { status: error.response?.status || 500 }
    );
  }
}
