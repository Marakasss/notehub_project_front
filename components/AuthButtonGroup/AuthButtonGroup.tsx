"use client";
import { LuUserRoundCheck, LuUserRound } from "react-icons/lu";
import { RiGoogleFill } from "react-icons/ri";
import LinkButton from "../UI/Button/LinkButton";
import { getGoogleOAuthUrl } from "@/lib/api/clientApi";
import Button from "../UI/Button/Button";

// ################################################################################

const AuthButtonGroup = () => {
  const handleGoogleAuth = async () => {
    const url = await getGoogleOAuthUrl();
    window.location.href = url;
  };
  return (
    <ul className="flex-1 flex flex-col justify-center items-center gap-4   ">
      <li>
        <LinkButton
          href="/sign-in"
          TWclasses="w-72 h-12"
          textContent="Login"
          icon={<LuUserRoundCheck size={22} />}
        />
      </li>

      <li>
        <LinkButton
          href="/sign-up"
          TWclasses="w-72 h-12"
          textContent="SingUp"
          icon={<LuUserRound size={22} />}
        />
      </li>

      <li>
        <Button
          onClick={handleGoogleAuth}
          TWclasses="w-72 h-12"
          textContent="SingUp with Google"
          icon={<RiGoogleFill size={18} />}
        />
      </li>
    </ul>
  );
};

export default AuthButtonGroup;
