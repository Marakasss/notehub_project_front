import LinkButton from "@/components/LinkButton/LinkButton";
import { LuUserRoundCheck, LuUserRound } from "react-icons/lu";
import { RiGoogleFill } from "react-icons/ri";

const AuthButtonGroup = () => {
  return (
    <ul className="flex-1 flex flex-col justify-center items-center gap-4   ">
      <li>
        <LinkButton
          href="/sign-in"
          widthClasses="w-72"
          textContent="Login"
          icon={<LuUserRoundCheck size={22} />}
        />
      </li>
      <li>
        <LinkButton
          href="/sign-up"
          widthClasses="w-72"
          textContent="SingUp"
          icon={<LuUserRound size={22} />}
        />
      </li>
      <li>
        <LinkButton
          widthClasses="w-72"
          textContent="SingUp with Google"
          icon={<RiGoogleFill size={18} />}
        />
      </li>
    </ul>
  );
};

export default AuthButtonGroup;
