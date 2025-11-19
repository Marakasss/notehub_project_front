"use client";

import { checkSession, getMe } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useEffect, useState } from "react";
import Loader from "../UI/Loader/Loader";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const isAuthenticated = await checkSession();
      if (!isAuthenticated) {
        clearIsAuthenticated();
        setHydrated(true);
        return;
      } else {
        const user = await getMe();
        if (user) setUser(user);
        setHydrated(true);
      }
    };
    fetchUser();
  }, [setUser, clearIsAuthenticated]);

  if (!hydrated) return <Loader />;

  return children;
};

export default AuthProvider;
