import { NextResponse } from "next/server";
import { api } from "../../api";
import { cookies } from "next/headers";

//##########################################################################

export async function POST() {
  const cookieStore = await cookies();

  try {
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;
    const sessionId = cookieStore.get("sessionId")?.value;

    await api.post("auth/logout", null, {
      headers: {
        Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken}; sessionId=${sessionId}`,
      },
    });

    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");
    cookieStore.delete("sessionId");

    return NextResponse.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout failed:", error);
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
