import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { api } from "../../api";
import { AxiosError } from "axios";

//##########################################################################

export async function GET() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("sessionId")?.value;

  if (!sessionId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cookieHeader = `sessionId=${sessionId}`;

  try {
    const { data } = await api.get("users/me", {
      headers: {
        Cookie: cookieHeader,
      },
    });

    return NextResponse.json(data);
  } catch (err) {
    const error = err as AxiosError<{ error: string }>;
    return NextResponse.json(
      {
        error: error.response?.data.error || `Failed to get current user`,
      },
      { status: error.response?.status || 500 }
    );
  }
}

//##########################################################################

export async function PATCH(request: Request) {
  const cookieStore = await cookies();
  const body = await request.json();
  const sessionId = cookieStore.get("sessionId")?.value;

  if (!sessionId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cookieHeader = `sessionId=${sessionId}`;

  try {
    const { data } = await api.patch("users/me", body, {
      headers: {
        Cookie: cookieHeader,
      },
    });

    if (data) return NextResponse.json(data);
  } catch (err) {
    const error = err as AxiosError<{ error: string }>;
    return NextResponse.json(
      {
        error: error.response?.data.error || `Failed to edit user`,
      },
      { status: error.response?.status || 500 }
    );
  }
}
