"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Note } from "../../types/note";
import { deleteNote } from "@/lib/api/clientApi";
import Link from "next/link";
import MagicBento from "../ReactBitsAnimations/MagicBento";
import useIsMobile from "@/lib/hooks/use-is-mobile";
import AnimatedList from "../ReactBitsAnimations/AnimatedList";
import { MdDeleteForever } from "react-icons/md";

// ################################################################################

interface NoteListProps {
  notes: Note[];
}

// ################################################################################

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
      <AnimatePresence>
        {notes.map((note: Note) => {
          const { _id, title, content, tag } = note;
          return (
            <motion.li
              className="relative"
              key={_id}
              layout
              initial={{ opacity: 1, scale: 1, x: 0 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: 100,
                rotate: 10,
                transition: { duration: 0.4 },
              }}
            >
              <Link href={`/notes/${_id}`}>
                <MagicBento
                  cards={[
                    {
                      color: "rgba(6, 5, 16, 0.5)",
                      children: (
                        <div className="flex flex-col h-full">
                          <div
                            className="absolute -top-3 -right-3 p-1  cursor-pointer z-50 transition  group "
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              mutate(_id);
                            }}
                          >
                            <MdDeleteForever
                              size={16}
                              className=" transition-colors duration-200 group-hover:text-cyan-200"
                            />
                          </div>
                          <div className="grow">
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
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  ) : (
    <AnimatedList
      items={notes.map((note: Note) => {
        const { _id, title, content, tag } = note;
        return (
          <Link href={`/notes/${_id}`} key={_id} className="relative">
            <div
              className="absolute -top-3 -right-3 p-1  cursor-pointer z-50 transition  group "
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                mutate(_id);
              }}
            >
              <MdDeleteForever
                size={16}
                className=" transition-colors duration-200 group-hover:text-cyan-200"
              />
            </div>
            <div className="flex flex-col gap-1 ">
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
