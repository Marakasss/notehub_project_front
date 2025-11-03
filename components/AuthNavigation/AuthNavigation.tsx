"use client";

import { useAuthStore } from "@/lib/store/authStore";
import { logout } from "@/lib/api/clientApi";
import { useRouter } from "next/navigation";
import Button from "../UI/Input/Button/Button";
import { HiUserCircle } from "react-icons/hi2";
import LinkButton from "../UI/Input/Button/LinkButton";
import Image from "next/image";
import css from "styled-jsx/css";

const AuthNavigation = () => {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();

  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.push("/sign-in");
  };

  return (
    isAuthenticated && (
      <div className="flex flex-col gap-3 pb-3 mt-auto">
        <div className="flex  gap-2 align-bottom ">
          <Image
            src={"/default-avatar.jpg"}
            alt="user avatar"
            width={32}
            height={32}
            className="border rounded-full "
          />
          <p className="text-sm my-auto">{user?.username.split("@")[0]}</p>
        </div>

        <ul className="flex gap-3 w-full">
          <li>
            <LinkButton
              href="/profile"
              prefetch={false}
              TWclasses="gap-2 text-xs "
              textContent="Profile"
              icon={<HiUserCircle size={18} />}
            ></LinkButton>
          </li>
          <li>
            <Button
              onClick={handleLogout}
              textContent="Logout"
              TWclasses="gap-2 text-xs "
              icon={<HiUserCircle size={18} />}
            >
              {" "}
            </Button>
          </li>
        </ul>
      </div>
    )
  );
};

export default AuthNavigation;
