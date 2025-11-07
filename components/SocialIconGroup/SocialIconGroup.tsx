import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const SocialIconGroup = () => {
  return (
    <ul className="flex gap-3">
      <li>
        <Link href={"https://github.com/Marakasss"}>
          <FaGithub size={"28px"} />
        </Link>
      </li>
      <li>
        <Link href={"https://t.me/igorpetriv"}>
          <FaTelegram size={"28px"} />
        </Link>
      </li>
      <li>
        <Link href={"https://www.linkedin.com/in/ihor-petriv-in/"}>
          <TbBrandLinkedinFilled size={"28px"} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIconGroup;
