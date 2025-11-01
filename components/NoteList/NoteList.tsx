"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Note } from "../../types/note";

import { deleteNote } from "@/lib/api/clientApi";
import Link from "next/link";
import MagicBento from "../ReactBitsAnimations/MagicBento";
import css from "styled-jsx/css";

interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: string) => deleteNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-0">
      {notes.map((note: Note) => {
        const { id, title, content, tag } = note;
        return (
          <li key={id}>
            <Link href={`/notes/${id}`}>
              <MagicBento
                cards={[
                  {
                    color: "rgba(6, 5, 16, 0.5)",
                    title: title,
                    description: content,
                    label: tag,

                    titleFontStyle: {
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#dedae8",
                    },
                    descriptionFontStyle: {
                      fontSize: "12px",
                      color: "#dedae8",
                    },
                    labelFontStyle: { fontSize: "10px", color: "#a0a0a0" },
                    alwaysGlow: true,
                  },
                ]}
                textAutoHide={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={400}
                glowColor="50, 0, 180"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NoteList;

// =============================================================

// <li key={id} className={css.listItem}>

//   <h2 className={css.title}>{title}</h2>
//   <p className={css.content}>{content}</p>
//   <div className={css.footer}>
//     <span className={css.tag}>{tag}</span>
//     <Link href={`/notes/${id}`} className={css.details}>
//       View details
//     </Link>
//     <button onClick={() => mutate(id)} className={css.button}>
//       Delete
//     </button>
//   </div>
// </li>
