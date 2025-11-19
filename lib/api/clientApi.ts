import nextServer from "./api";
import type { Note, NewNoteData } from "../../types/note";
import { User } from "@/types/user";

//TYPES
export interface FetchNoteResponse {
  data: FetchNotesResponseData;
}

export interface GetNoteResponse {
  status: number;
  message: string;
  data: Note;
}

export interface FetchNotesResponseData {
  notes: Note[];
  totalPages: number;
}

export interface FetchNotesParams {
  search?: string;
  page?: number;
  perPage?: number;
  tag?: string;
  sortBy?: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface AuthUserData {
  username: string;
  email: string;
}

//GET------------------------------------------------------------------

export async function fetchNotes(
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

  const response = await nextServer.get<FetchNoteResponse>("/notes", {
    params,
  });
  return response.data;
}

//GET NOTE BY ID
export async function fetchNoteById(noteId: string): Promise<Note> {
  const response = await nextServer.get(`/notes/${noteId}`);
  return response.data.data;
}

//GET USER SESSION
export async function checkSession(): Promise<boolean> {
  try {
    await nextServer.post("/auth/refresh");
    return true;
  } catch {
    return false;
  }
}

//GET CURRENT USER
export const getMe = async (): Promise<User> => {
  const responce = await nextServer.get("/users/me");
  return responce.data.data;
};

export const getGoogleOAuthUrl = async (): Promise<string> => {
  const response = await nextServer.get("/auth/google/url");
  return response.data.data.url;
};

export const confirmGoogleOAuth = async (code: string) => {
  const response = await nextServer.post("/auth/google/confirm", { code });
  return response.data;
};

//POST------------------------------------------------------------------

export async function createNote(newNote: NewNoteData): Promise<Note> {
  const response = await nextServer.post<Note>("/notes", newNote);
  return response.data;
}

export async function register(
  userData: RegisterRequest
): Promise<AuthUserData> {
  const response = await nextServer.post<AuthUserData>(
    "/auth/register",
    userData
  );

  return response.data;
}

export async function login(userData: RegisterRequest): Promise<User> {
  const response = await nextServer.post<User>("/auth/login", userData);

  return response.data;
}

export async function logout() {
  await nextServer.post("/auth/logout");
}

//DELETE----------------------------------------------------------------------
export async function deleteNote(noteId: string): Promise<Note> {
  const response = await nextServer.delete<Note>(`/notes/${noteId}`);
  return response.data;
}

//PATCH----------------------------------------------------------------------

export const editUser = async (user: AuthUserData): Promise<User> => {
  const responce = await nextServer.patch<User>("/users/me", user);
  return responce.data;
};
