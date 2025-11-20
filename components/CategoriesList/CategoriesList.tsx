"use client";

import css from "./CategoriesList.module.css";
import { tags } from "@/constants/tags";
import useIsMobile from "@/lib/hooks/use-is-mobile";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CategoriesListProps {
  onClose?: () => void;
}

const CategoriesList = ({ onClose }: CategoriesListProps) => {
  const path = usePathname().split("/");
  const activeTag = path[path.length - 1];
  const { isMobile } = useIsMobile();
  return (
    <ul className={css.menuList}>
      {tags.map((tag) => {
        const isActive = tag === activeTag;
        return (
          <li
            key={tag}
            className={`transition-transform duration-200  hover:text-cyan-100 ${css.menuItem}`}
          >
            <Link
              href={`/notes/filter/${tag}`}
              className={`${css.menuLink} ${
                !isMobile && isActive ? "animate-shadow-drop-center" : ""
              } ${isMobile ? "animate-shadow-drop-center" : ""}`}
              onClick={onClose}
            >
              {tag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
