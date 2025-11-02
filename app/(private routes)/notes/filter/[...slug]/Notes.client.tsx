"use client";

import { useState } from "react";
import NoteList from "@/components/NoteList/NoteList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api/clientApi";
import Pagination from "@/components/Pagination/Pagination";
import { useDebounce } from "use-debounce";
import type { FetchNotesResponse } from "@/lib/api/clientApi";
import { Tag } from "@/types/note";
import { useSearchStore } from "@/lib/store/searchStore";

interface NotesClientProps {
  initialNotesData: FetchNotesResponse;
  tag?: Tag;
}

export default function NotesClient({
  initialNotesData,
  tag,
}: NotesClientProps) {
  const { query } = useSearchStore();
  const [currentPage, setCurrentPage] = useState<number>(1);

  //FETCHING & SEARCHING NOTES
  const [debouncedInputValue] = useDebounce(query, 500);

  const notes = useQuery({
    queryKey: ["notes", debouncedInputValue, currentPage, tag],
    queryFn: () => fetchNotes(debouncedInputValue, currentPage, tag),
    placeholderData: keepPreviousData,
    initialData:
      !debouncedInputValue && currentPage === 1 ? initialNotesData : undefined,
  });

  const totalPages = notes.data?.totalPages ?? 0;

  return (
    <>
      <NoteList notes={notes.data?.notes ?? []} />
      {totalPages > 0 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
