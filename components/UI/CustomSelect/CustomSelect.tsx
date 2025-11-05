"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CustomTagSelect = ({
  fieldId,
  tags,
  draft,
  handleChange,
}: {
  fieldId: string;
  tags: string[];
  draft: { tag: string };
  handleChange: (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(draft.tag || tags[1] || "");

  const handleSelect = (tag: string) => {
    setSelected(tag);
    setIsOpen(false);
    // емуляція onChange, щоб працювало з твоєю логікою
    handleChange({
      target: { name: "tag", value: tag },
    } as React.ChangeEvent<HTMLSelectElement>);
  };

  return (
    <div className="group w-full flex flex-col relative">
      <label
        htmlFor={`${fieldId}-tag`}
        className="text-xs mb-2 text-cyan-100 tracking-wide"
      >
        Tag
      </label>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`border border-cyan-900 rounded-xl px-3 py-2 w-full flex justify-between items-center
          bg-[linear-gradient(135deg,rgba(5,51,69,0.3),transparent)]
          shadow-[0_0_3px_rgba(34,211,238,0.2)]
          hover:shadow-[0_0_5px_rgba(34,211,238,0.5)]
          transition-all duration-200
          outline-none focus:outline-none active:outline-none
            [ -webkit-tap-highlight-color:transparent ]
        `}
      >
        <span>{selected || "Select tag"}</span>
        <ChevronDown
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? "rotate-180 text-cyan-700" : "text-cyan-600"
          }`}
        />
      </button>

      {/* Випадаючий список */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-full z-50 
              bg-[rgba(2,21,35,0.95)] backdrop-blur-md
              border border-cyan-900 rounded-2xl overflow-hidden
              shadow-[0_0_5px_rgba(34,211,238,0.4)]
              text-cyan-300"
          >
            {tags.slice(1).map((tag) => (
              <li
                key={tag}
                onClick={() => handleSelect(tag)}
                className="px-4 py-2 cursor-pointer transition-all duration-150 text-sm
                  hover:bg-cyan-900/60 hover:text-cyan-500 hover:pl-6
                  active:scale-[0.98]
                "
              >
                {tag}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomTagSelect;
