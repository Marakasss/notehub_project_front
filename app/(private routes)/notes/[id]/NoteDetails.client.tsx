"use client";

import { useParams } from "next/navigation";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api/clientApi";

import Button from "@/components/UI/Button/Button";

const NoteDetailsClient = () => {
  const { id } = useParams();

  const { data: note } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(String(id)),
    refetchOnMount: false,
    placeholderData: keepPreviousData,
  });

  if (!note) return <p>Note not found</p>;

  const date = new Date(note.createdAt);
  const formattedDate = date.toLocaleString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-fit max-w-[500px] sm:mt-16 flex justify-center items-center flex-col  gap-2 sm:gap-5 p-3 sm:p-8 self-center  border border-cyan-900 rounded-2xl    bg-[linear-gradient(135deg,rgba(5,51,69,0.9),rgba(5,51,69,0.8))] shadow-[0_4px_30px_rgba(0,0,0,0.1)] ">
      <p className="text-xs self-start">{note.tag}</p>
      <div className="flex flex-col gap-3">
        <div className="text-xs sm:text-sm font-bold border-b pb-3">
          <h2>{note.title}</h2>
        </div>
        <p
          className="text-xs sm:text-sm mt-2 max-h-[12em] overflow-y-auto pr-2"
          style={{
            lineHeight: "1.5em",
            wordBreak: "break-word",
            overflowWrap: "anywhere",
          }}
        >
          {note.content}
        </p>
      </div>
      <div className="w-full flex justify-between ">
        <p className="text-xs self-end">{formattedDate}</p>
        <Button
          textContent="Edit"
          style={{ backgroundColor: "rgba(25,105,125,0.2)" }}
          TWclasses="self-end"
        ></Button>
      </div>
    </div>
  );
};

export default NoteDetailsClient;
