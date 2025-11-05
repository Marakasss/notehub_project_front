"use client";

import Logo from "@/components/UI/Logo/Logo";

import AppDescription from "@/components/AppDescription/AppDescription";
import AuthButtonGroup from "../components/AuthButtonGroup/AuthButtonGroup";

export default function Page() {
  return (
    <main className="p-3">
      <Logo />
      <div className="lg:flex flex-col   lg:flex-row-reverse my-auto mx-auto  p-8">
        <AppDescription />
        <AuthButtonGroup />
      </div>
    </main>
  );
}
