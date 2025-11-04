"use client";

import Logo from "@/components/UI/Input/Logo/Logo";

import AppDescription from "@/components/AppDescription/AppDescription";
import AuthButtonGroup from "../components/AuthButtonGroup/AuthButtonGroup";
import Header from "@/components/Header/Header";

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
