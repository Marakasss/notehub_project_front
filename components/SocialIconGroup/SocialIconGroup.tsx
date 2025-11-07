import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

interface SocialIconGroupProps {
  size?: string | number;
}

const SocialIconGroup = ({ size }: SocialIconGroupProps) => {
  return (
    <ul className="flex gap-3">
      <li>
        <Link href={"https://github.com/Marakasss"}>
          <FaGithub size={size ?? "28px"} />
        </Link>
      </li>
      <li>
        <Link href={"https://t.me/igorpetriv"}>
          <FaTelegram size={size ?? "28px"} />
        </Link>
      </li>
      <li>
        <Link href={"https://www.linkedin.com/in/ihor-petriv-in/"}>
          <TbBrandLinkedinFilled size={size ?? "28px"} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIconGroup;
