import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  TWclasses?: string;
}

const Input = ({ style, onChange, TWclasses, ...rest }: InputProps) => {
  return (
    <input
      onChange={onChange}
      className={`flex flex-col gap-2 border border-cyan-900 rounded-xl p-2 w-auto  bg-transparent outline-none 
                          transition-all duration-300
                          focus:ring focus:ring-cyan-800 focus:border-cyan-800
                          focus:shadow-[0_0_12px_rgba(34,211,238,0.4)] ${TWclasses}`}
      style={style}
      {...rest}
    />
  );
};

export default Input;
