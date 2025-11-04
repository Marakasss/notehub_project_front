"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Note } from "../../types/note";
import { deleteNote } from "@/lib/api/clientApi";
import Link from "next/link";
import MagicBento from "../ReactBitsAnimations/MagicBento";
import useIsMobile from "@/lib/hooks/use-is-mobile";
import AnimatedList from "../ReactBitsAnimations/AnimatedList";

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
  const { isMobile } = useIsMobile();
  return !isMobile ? (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-0 overflow-y-auto flex-1">
      {notes.map((note: Note) => {
        const { id, title, content, tag } = note;
        return (
          <li key={id}>
            <Link href={`/notes/${id}`}>
              <MagicBento
                cards={[
                  {
                    color: "rgba(6, 5, 16, 0.5)",
                    children: (
                      <div className="flex flex-col h-full">
                        <div className="flex-grow">
                          <h3 className="text-sm font-bold mb-2 ">{title}</h3>
                          <p
                            className="text-xs"
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 3,
                              overflow: "hidden",
                              wordBreak: "break-word",
                              overflowWrap: "anywhere",
                            }}
                          >
                            {content}
                          </p>
                        </div>

                        <span className="text-xs text-cyan-600 mt-auto">
                          {tag}
                        </span>
                      </div>
                    ),
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
  ) : (
    <AnimatedList
      items={notes.map((note: Note) => {
        const { id, title, content, tag } = note;
        return (
          <Link href={`/notes/${id}`} key={id}>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold  ">{title}</h3>
              <p
                className="text-xs"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  wordBreak: "break-word",
                  overflowWrap: "anywhere",
                }}
              >
                {content}
              </p>
              <span className="text-xs text-cyan-600  mt-3">{tag}</span>
            </div>
          </Link>
        );
      })}
      showGradients={true}
      enableArrowNavigation={true}
      displayScrollbar={false}
      itemClassName={"animate-shadow-drop-center"}
    />
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
