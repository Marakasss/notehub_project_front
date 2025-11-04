import React from "react";
import css from "./ProfilePage.module.css";
import Link from "next/link";
import Image from "next/image";
import { getMeServer } from "@/lib/api/serverApi";
import { Metadata } from "next";
import LinkButton from "@/components/UI/Input/Button/LinkButton";

//Metadata----------------------------------------

export const generateMetadata = async (): Promise<Metadata> => {
  const { username, avatar } = await getMeServer();

  return {
    title: username,
    description: `profile of ${username}`,

    openGraph: {
      title: username,
      description: `profile of ${username}`,
      url: `https://09-auth-cyan.vercel.app/profile`,
      siteName: "NoteHub",
      images: [
        {
          url: avatar || "/default-avatar.jpg",
          width: 1200,
          height: 630,
          alt: "NoteHub App",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: username,
      description: `profile of ${username}`,
      images: [avatar || "/default-avatar.jpg"],
    },
  };
};

const ProfilePage = async () => {
  const user = await getMeServer();
  if (!user) {
    console.log("Who are you?");
  }

  return (
    <div className="flex flex-col gap-5 p-3 items-center">
      <div className="flex gap-5 justify-center">
        <h1 className="text-2xl">Profile Page</h1>
      </div>
      <div className="">
        <Image
          src={user?.avatar || "/default-avatar.png"}
          alt="User Avatar"
          width={120}
          height={120}
          className={css.avatar}
        />
      </div>
      <div className="text-sm">
        <p className="">Username: {user?.username}</p>
        <p>Email: {user?.email}</p>
      </div>
      <LinkButton
        href="/profile/edit"
        textContent="Edit profile"
        TWclasses="w-32"
      />
    </div>
  );
};

export default ProfilePage;
