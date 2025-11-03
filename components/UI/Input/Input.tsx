import React from "react";

interface InputProps {
  value?: string;
  id?: string;
  type?: string;
  name?: string;
  placeHolder?: string;
  required?: boolean;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  value,
  id,
  type,
  name,
  placeHolder,
  required,
  style,
  onChange,
}: InputProps) => {
  return (
    <input
      value={value}
      id={id}
      type={type}
      name={name}
      placeholder={placeHolder ?? ""}
      required={required}
      onChange={onChange}
      className="flex flex-col gap-2 border border-cyan-900 rounded-xl p-2 w-auto sm:w-64 bg-transparent outline-none 
                          transition-all duration-300
                          focus:ring focus:ring-cyan-800 focus:border-cyan-800
                          focus:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
      style={style}
    />
  );
};

export default Input;
