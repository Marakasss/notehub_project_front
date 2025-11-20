"use client";

import AuthNavigation from "@/components/AuthNavigation/AuthNavigation";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import LinkButton from "@/components/UI/Button/LinkButton";
import useIsMobile from "@/lib/hooks/use-is-mobile";
import Link from "next/link";
import { TbInfoSquareFilled } from "react-icons/tb";
import { FaList } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { TbHomeFilled } from "react-icons/tb";
import { useState } from "react";
import MobileCategoriesList from "@/components/MobileCategoriesList/MobileCategoriesList";

const SidebarNotes = () => {
  const { isMobile, isLoading } = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return isMobile && !isLoading ? (
    <>
      <ul className="flex flex-col gap-6 align-middle ">
        <li>
          <Link href="/notes/filter/All">
            <TbHomeFilled size={26} />
          </Link>
        </li>
        <li>
          <Link href="/notes/action/create">
            <FaPlusSquare size={26} />
          </Link>
        </li>
        <li>
          <button onClick={toggleOpen}>
            <FaList size={26} />
          </button>
          <MobileCategoriesList
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <CategoriesList onClose={() => setIsOpen(false)} />
          </MobileCategoriesList>
        </li>

        <li>
          <Link href="/profile">
            <FaUserEdit size={26} />
          </Link>
        </li>
        <li>
          <Link href="/">
            <TbInfoSquareFilled size={26} />
          </Link>
        </li>
        <AuthNavigation />
      </ul>
    </>
  ) : (
    <>
      <LinkButton
        href="/notes/action/create"
        textContent="Create note"
        TWclasses="h-10"
      />
      <CategoriesList />
      <AuthNavigation />
    </>
  );
};

export default SidebarNotes;
