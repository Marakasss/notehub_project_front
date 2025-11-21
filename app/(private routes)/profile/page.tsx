import { getMeServer } from "@/lib/api/serverApi";
import { Metadata } from "next";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

//##########################################################################

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

//##########################################################################

const ProfilePage = async () => {
  const user = await getMeServer();

  return <ProfileCard user={user} />;
};

export default ProfilePage;
