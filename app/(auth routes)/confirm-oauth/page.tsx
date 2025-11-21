"use client";

import Loader from "@/components/UI/Loader/Loader";
import { confirmGoogleOAuth } from "@/lib/api/clientApi";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

//##########################################################################

const GoogleAuthConfirmPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code") || "";

  useEffect(() => {
    const confirmOAuth = async () => {
      if (!code) {
        router.push("/");
        return;
      }

      const auth = await confirmGoogleOAuth(code);
      if (auth) window.location.href = "/notes/filter/All";
      return auth;
    };

    confirmOAuth();
  }, [router, code]);

  return <Loader />;
};

export default GoogleAuthConfirmPage;
