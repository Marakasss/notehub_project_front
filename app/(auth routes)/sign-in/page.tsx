"use client";

import { login } from "@/lib/api/clientApi";
import Logo from "@/components/Logo/Logo";
import AuthForm from "@/components/AuthForm/AuthForm";

const SignInPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen  ">
        <Logo />
        <div className="flex flex-1 justify-center items-center flex-col self-center relative">
          <AuthForm authFn={login} authType="Login" />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
