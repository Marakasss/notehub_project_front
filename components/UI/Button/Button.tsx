import React from "react";
import css from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  TWclasses?: string;
  icon?: React.ReactNode;
  textContent?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  TWclasses = "w-auto h-auto",
  icon,
  textContent,
  type = "button",
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`
        px-4 py-2 transition-transform duration-200  hover:text-cyan-100
        ${TWclasses}
        ${css.animatedButton}
      `}
      {...rest}
    >
      {icon && <span className="ml-2">{icon}</span>}
      <span className="mx-auto my-0">{textContent}</span>
      <span></span>
    </button>
  );
};

export default Button;
