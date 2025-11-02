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
      <div className="flex flex-col gap-4 border-t border-t-cyan-900 mt-10 py-5 ">
        <div className="flex flex-col gap-2 align-middle justify-center">
          <Image
            src={"/default-avatar.jpg"}
            alt="user avatar"
            width={32}
            height={32}
            className="border rounded-full my-0 mx-auto "
          />
          <p className="my-0 mx-auto">{user?.username}</p>
        </div>

        <ul className="flex gap-3 w-full">
          <li>
            <LinkButton
              href="/profile"
              prefetch={false}
              TWclasses="gap-2 text-sm"
              textContent="Profile"
              icon={<HiUserCircle size={18} />}
            ></LinkButton>
          </li>
          <li>
            <Button
              onClick={handleLogout}
              textContent="Logout"
              TWclasses="gap-2"
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
