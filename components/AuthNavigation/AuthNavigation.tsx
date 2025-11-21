"use client";
import { useAuthStore } from "@/lib/store/authStore";
import { logout } from "@/lib/api/clientApi";
import { useRouter } from "next/navigation";
import Button from "../UI/Button/Button";
import { HiUserCircle } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import LinkButton from "../UI/Button/LinkButton";
import Image from "next/image";
import useIsMobile from "@/lib/hooks/use-is-mobile";
import { RiLogoutCircleLine } from "react-icons/ri";

// ################################################################################

const AuthNavigation = () => {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();
  const { isMobile, isLoading } = useIsMobile();
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.push("/");
  };

  return isAuthenticated && !isMobile && !isLoading ? (
    <div className="flex flex-col gap-4 pb-3 mt-auto">
      <div className="flex  gap-2 self-center  ">
        <Image
          src={"/default-avatar.png"}
          alt="user avatar"
          width={36}
          height={36}
          className="border  rounded-full  "
        />
        <p className="text-sm my-auto">{user?.username}</p>
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
            icon={<TbLogout size={18} />}
          >
            {" "}
          </Button>
        </li>
      </ul>
    </div>
  ) : (
    <li>
      <button onClick={handleLogout}>
        <RiLogoutCircleLine size={26} />
      </button>
    </li>
  );
};

export default AuthNavigation;
