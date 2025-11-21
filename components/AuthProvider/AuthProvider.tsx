"use client";

import { checkSession, getMe } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useEffect, useState } from "react";
import Loader from "../UI/Loader/Loader";

// ################################################################################

type Props = {
  children: React.ReactNode;
};

// ################################################################################

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const isAuthenticated = await checkSession();

      if (!isAuthenticated) {
        clearIsAuthenticated();
        setMounted(true);
        return;
      } else {
        const user = await getMe();
        if (user) {
          setUser(user);
          setMounted(true);
        }
      }
    };
    fetchUser();
  }, [setUser, clearIsAuthenticated]);

  if (!mounted) return <Loader />;

  return children;
};

export default AuthProvider;
