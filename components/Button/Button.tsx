import React from "react";
import css from "./Button.module.css";

interface ButtonProps {
  widthClasses?: string;
  heightClasses?: string;
  icon?: React.ReactNode;
  textContent?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  widthClasses = "w-auto",
  heightClasses = "h-auto",
  icon,
  textContent,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`
        
        ${widthClasses} ${heightClasses}
        ${css.animatedButton}
      `}
    >
      <span>{textContent}</span>
      <span></span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;

// inline-flex items-center justify-center relative
//         px-4 py-2 mb-2
//         text-sm font-semibold text-cyan-100 rounded-xl
//         bg-gradient-to-br from-slate-900 to-cyan-950
//         hover:from-cyan-900 hover:to-slate-900
//         transition-all duration-300
