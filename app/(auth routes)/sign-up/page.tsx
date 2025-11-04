"use client";

import { register } from "@/lib/api/clientApi";
import Logo from "@/components/UI/Input/Logo/Logo";
import AuthForm from "@/components/AuthForm/AuthForm";

const SignUpPage = () => {
  return (
    <div className="p-3 flex flex-col h-screen w-screen  ">
      <Logo />
      <div className="flex flex-1 justify-center items-center flex-col self-center relative">
        <AuthForm authFn={register} authType="Register" />
      </div>
    </div>
  );
};

export default SignUpPage;
