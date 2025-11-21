"use client";

import Logo from "@/components/UI/Logo/Logo";
import AppDescription from "@/components/AppDescription/AppDescription";
import AuthButtonGroup from "../components/AuthButtonGroup/AuthButtonGroup";
import { useAuthStore } from "@/lib/store/authStore";
import LinkButton from "@/components/UI/Button/LinkButton";

export default function Page() {
  const { isAuthenticated } = useAuthStore();
  return (
    <main className="p-3 ">
      {/*  */}
      <Logo />

      <div className="lg:flex flex-col   lg:flex-row-reverse mt-6  mx-auto px-1 md:px-12  ">
        {/*  */}
        <AppDescription />

        {!isAuthenticated ? (
          <AuthButtonGroup />
        ) : (
          <LinkButton
            href="/notes/filter/All"
            textContent="To my notes"
            TWclasses=" h-fit w-fit mx-auto self-center "
          ></LinkButton>
        )}
      </div>
    </main>
  );
}
