import { cookies } from "next/headers";
import { FetchNotesParams, FetchNoteResponse } from "./clientApi";
import { Note } from "@/types/note";
import nextServer from "./api";
import { User } from "@/types/user";

//Fetch notes with server-side cookies
export async function fetchNotesServer(
  query: string,
  page: number,
  tag: string | undefined = undefined
): Promise<FetchNoteResponse> {
  const params: FetchNotesParams = {
    ...(query.trim() !== "" && { search: query.trim() }),
    page: page,
    perPage: 12,
    tag,
  };
  const cookieStore = await cookies();
  const response = await nextServer.get<FetchNoteResponse>("/notes", {
    params,
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response.data;
}

//Fetch note by ID with server-side cookies
export async function fetchNoteByIdServer(noteId: string): Promise<Note> {
  const cookieStore = await cookies();
  const response = await nextServer.get(`/notes/${noteId}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return response.data.data;
}

export async function checkServerSession(cookieHeader: string | null) {
  return nextServer.post(
    "/auth/refresh",
    {},
    {
      headers: {
        Cookie: cookieHeader ?? "",
      },
      withCredentials: true,
    }
  );
}

export const getMeServer = async (): Promise<User> => {
  const cookieStore = await cookies();
  const responce = await nextServer.get("/users/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return responce.data.data;
};
