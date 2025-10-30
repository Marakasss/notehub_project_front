import Link from "next/link";

interface ButtonProps {
  widthClasses?: string;
  heightClasses?: string;
  icon?: React.ReactNode;
  textContent?: string;
  href?: string;
}

const LinkButton = ({
  widthClasses = "w-auto",
  heightClasses = "h-auto",
  icon,
  textContent,
  href,
}: ButtonProps) => {
  return (
    <Link
      href={href ?? "/"}
      className={`
        inline-flex items-center justify-between
        px-3 py-2 mb-2 me-2
        overflow-hidden text-sm font-medium text-blue-100 rounded-lg
        bg-linear-to-br from-slate-950 to-cyan-950 
        hover:text-white ${widthClasses} ${heightClasses}
        
         hover:from-cyan-950 hover:to-slate-900
        transition-all duration-300 ease-in-out 
      `}
    >
      <span className="relative px-2.5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md  ">
        {textContent}
      </span>
      <span>{icon}</span>
    </Link>
  );
};

export default LinkButton;
