"use client";

import { login } from "@/lib/api/clientApi";
import Logo from "@/components/UI/Logo/Logo";
import AuthForm from "@/components/AuthForm/AuthForm";

//##########################################################################

const SignInPage = () => {
  return (
    <>
      <div className=" p-3 flex flex-col h-screen w-screen  ">
        <Logo />
        <div className="flex flex-1 justify-center items-center flex-col self-center relative ">
          <AuthForm authFn={login} authType="Login" />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
