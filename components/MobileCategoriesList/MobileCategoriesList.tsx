"use client";

import useIsMobile from "@/lib/hooks/use-is-mobile";
import { useClientPortalTarget } from "@/lib/hooks/useClientPortalTarget";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

interface MobileCategoriesListProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const MobileCategoriesList = ({
  isOpen,
  onClose,
  children,
}: MobileCategoriesListProps) => {
  const portalTarget = useClientPortalTarget();
  const { isMobile, isLoading } = useIsMobile();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!portalTarget) return null;

  return createPortal(
    <>
      {isMobile && !isLoading && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-150 transition-opacity"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-72  bg-linear-to-bl from-gray-950 to-slate-950 text-white shadow-2xl z-180
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <button
          onClick={onClose}
          className="p-6 rounded  hover:bg-cyan-900/30 transition"
        >
          <IoCloseCircleOutline size={22} />
        </button>
        <div className="overflow-y-auto h-[calc(100%-56px)] p-4">
          {children}
        </div>
      </div>
    </>,
    portalTarget
  );
};

export default MobileCategoriesList;
