import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { api } from "../../api";
import { AxiosError } from "axios";

interface NoteDetailsProps {
  params: Promise<{ id: string }>;
}

//##########################################################################

export async function GET(request: Request, { params }: NoteDetailsProps) {
  const { id } = await params;
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const { data } = await api(`/notes/${id}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    if (data) {
      return NextResponse.json(data);
    }
  } catch (err) {
    const error = err as AxiosError<{ error: string }>;
    return NextResponse.json(
      {
        error: error.response?.data.error || `Failed to fetch note by id ${id}`,
      },
      { status: error.response?.status || 500 }
    );
  }
}

//##########################################################################

export async function DELETE(
  request: NextRequest,
  { params }: NoteDetailsProps
) {
  const { id } = await params;

  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const { data } = await api.delete(`/notes/${id}`, {
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
      {
        error:
          error.response?.data.error || `Failed to delete note by id ${id}`,
      },
      { status: error.response?.status || 500 }
    );
  }
}

//##########################################################################

export async function PATCH(request: Request, { params }: NoteDetailsProps) {
  const { id } = await params;
  const body = await request.json();

  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const { data } = await api.patch(`/notes/${id}`, body, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    if (data) {
      return NextResponse.json(data);
    }
  } catch (err) {
    const error = err as AxiosError<{ error: string }>;
    return NextResponse.json(
      {
        error: error.response?.data.error || `Failed to patch note by id ${id}`,
      },
      { status: error.response?.status || 500 }
    );
  }
}
