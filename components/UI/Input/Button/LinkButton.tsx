import React from "react";
import css from "./Button.module.css";
import Link from "next/link";

interface ButtonProps {
  TWclasses?: string;
  icon?: React.ReactNode;
  textContent?: string;
  href: string;
  prefetch?: boolean;
}

const LinkButton = ({
  TWclasses = "w-auto h-auto",
  icon,
  textContent,
  href = "/",
  prefetch = false,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={`
         px-4 py-2
         
        ${TWclasses}
        ${css.animatedButton}
      `}
    >
      {icon && <span>{icon}</span>}
      <span className="mx-auto my-0">{textContent}</span>
      <span></span>
    </Link>
  );
};

export default LinkButton;
