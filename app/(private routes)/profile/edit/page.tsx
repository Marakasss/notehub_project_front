"use client";
import Image from "next/image";
import { useAuthStore } from "@/lib/store/authStore";
import { AuthUserData, editUser } from "@/lib/api/clientApi";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import GlareHover from "@/components/ReactBitsAnimations/GlareHover";

const EditProfile = () => {
  const [error, setError] = useState("");
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const username = String(formData.get("username")).trim();
    if (!username) {
      setError("Username is required");
      return;
    }

    if (user) {
      const updatedUser: AuthUserData = {
        username,
        email: user.email,
      };
      try {
        const response = await editUser(updatedUser);
        setUser(response);
        console.log("User edit:", response);

        router.push("/profile");
      } catch (err) {
        console.error("Error updating profile:", err);
        setError("Failed to update profile. Please try again.");
      }
    }
  };

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
          <h1 className=" text-2xl">Edit Profile</h1>

          <Image
            src={user?.avatar || "/public/default-avatar.jpg"}
            alt="User Avatar"
            width={80}
            height={80}
            className="rounded-full sm:min-w-[120px] sm:min-h-[120px] "
          />

          <form action={handleSubmit} className="flex flex-col gap-3 sm:gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Username:</label>

              <Input
                defaultValue={user?.username}
                type={"text"}
                id={"username"}
                name={"username"}
                TWclasses="text-sm min-w-[220px] sm:max-w-[280px]"
              />
            </div>

            <p className="self-center text-sm sm:text-xl">{user?.email}</p>

            <div className="flex justify-center gap-3">
              <Button
                type="submit"
                textContent="Save"
                TWclasses="w-22 sm:w-30"
              ></Button>
              <Button
                onClick={() => router.push("/profile")}
                type="button"
                textContent="Cancel"
                TWclasses="w-22 sm:w-30"
              ></Button>
            </div>
          </form>
          {error && <p className="">{error}</p>}
        </div>
      </GlareHover>
    </div>
  );
};

export default EditProfile;
