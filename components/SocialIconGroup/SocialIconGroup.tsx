import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const SocialIconGroup = () => {
  return (
    <ul className="flex gap-3">
      <li>
        <Link href={"/"}>
          <FaGithub size={"28px"} />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FaTelegram size={"28px"} />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <TbBrandLinkedinFilled size={"28px"} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIconGroup;
