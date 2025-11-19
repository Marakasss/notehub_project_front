"use client";

import { User } from "@/types/user";
import React from "react";
import GlareHover from "../ReactBitsAnimations/GlareHover";
import LinkButton from "../UI/Button/LinkButton";
import Image from "next/image";

interface ProfileCardProps {
  user: User;
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div className="mt-6 w-fit self-center relative">
      <GlareHover
        glareColor="#00b8db"
        glareOpacity={0.2}
        glareSize={275}
        transitionDuration={1000}
        playOnce={true}
        width=""
        height=""
        borderColor="transparent"
        background="transparent"
        borderRadius="24px"
      >
        <div className="w-fit  gap-2 sm:gap-5 p-4 sm:p-8 self-center  border border-cyan-900 rounded-3xl flex justify-center items-center flex-col   bg-[linear-gradient(135deg,rgba(5,51,69,0.2),transparent)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] sm:min-w-[300px]">
          <h1 className="text-2xl">Profile Page</h1>

          <div className="">
            <Image
              src={user?.avatar || "/default-avatar.png"}
              alt="User Avatar"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          <div className="text-sm">
            <p className="">Username: {user?.username.split("@")[0]}</p>
            <p>Email: {user?.email}</p>
          </div>
          <LinkButton
            href="/profile/edit"
            textContent="Edit profile"
            TWclasses="w-32"
          />
        </div>
      </GlareHover>
    </div>
  );
};

export default ProfileCard;
