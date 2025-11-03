"use client";

import { tags } from "@/constants/tags";
import css from "./SideBarNotes.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthNavigation from "@/components/AuthNavigation/AuthNavigation";
import LinkButton from "@/components/UI/Input/Button/LinkButton";
import useIsMobile from "@/lib/hooks/use-is-mobile";

const SidebarNotes = () => {
  const path = usePathname().split("/");
  const activeTag = path[path.length - 1];
  const { isMobile, isLoading } = useIsMobile();

  return (
    !isMobile &&
    !isLoading && (
      <>
        <LinkButton
          href="/notes/action/create"
          textContent="Create note"
          TWclasses="h-10"
        />
        <ul className={css.menuList}>
          {tags.map((tag) => {
            const isActive = tag === activeTag;
            return (
              <li key={tag} className={css.menuItem}>
                <Link
                  href={`/notes/filter/${tag}`}
                  className={`${css.menuLink} ${isActive ? css.active : ""} `}
                >
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
        <AuthNavigation />
      </>
    )
  );
};

export default SidebarNotes;
