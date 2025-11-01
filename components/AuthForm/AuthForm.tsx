"use client";

import React, { useState } from "react";

import { getMe, RegisterRequest } from "@/lib/api/clientApi";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";
import Button from "@/components/Button/Button";
import GlareHover from "@/components/ReactBitsAnimations/GlareHover";
import z from "zod";
import { User } from "@/types/user";

interface AuthFormProps {
  authFn: (userData: RegisterRequest) => Promise<User>;
  authType: "Login" | "Register";
}

const AuthForm = ({ authFn, authType }: AuthFormProps) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { setIsAuthenticated, setUser } = useAuthStore.getState();

  const Schema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues: RegisterRequest = {
        email: String(formData.get("email")),
        password: String(formData.get("password")),
      };
      const validation = Schema.safeParse(formValues);
      if (!validation.success) {
        setError(validation.error.issues[0].message);
        return;
      }
      await authFn(formValues);
      setIsAuthenticated(true);
      const user = await getMe();
      setUser(user);
      router.push("/profile");
    } catch (err) {
      console.error("error", err);
      setError("Invalid email or password");
    }
  };
  return (
    <>
      <GlareHover
        glareColor="#00b8db"
        glareOpacity={0.2}
        glareSize={275}
        transitionDuration={1000}
        playOnce={true}
        width=""
        height=""
        borderColor="transparent"
        background="transparent"
        borderRadius="24px"
      >
        {" "}
        <form
          action={handleSubmit}
          className="border border-cyan-900 rounded-3xl p-8 flex justify-center items-center flex-col relative backdrop-blur-sm bg-white/1 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        >
          <h1 className="text-xl font-bold text-cyan-800 text-center mb-2">
            {authType}
          </h1>
          <div className="group flex flex-col  mb-4">
            <label
              htmlFor="email"
              className="text-sm font-normal text-cyan-900 ml-1 transition-colors duration-300 group-focus-within:text-cyan-800"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="flex flex-col gap-2 mb-4 border border-cyan-900 rounded-xl p-2 w-64 bg-transparent outline-none 
                          transition-all duration-300
                          focus:ring focus:ring-cyan-800 focus:border-cyan-800
                          focus:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
            />
          </div>
          <div className="group flex flex-col  mb-4">
            <label
              htmlFor="password"
              className="text-sm font-normal text-cyan-900 ml-1 transition-colors duration-300 group-focus-within:text-cyan-800"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="flex flex-col gap-2 mb-4 border border-cyan-900 rounded-xl p-2 w-64 bg-transparent outline-none 
                          transition-all duration-300
                          focus:ring focus:ring-cyan-800 focus:border-cyan-800
                          focus:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
            />
          </div>
          <div className="group flex flex-col  mb-4">
            <Button
              type="submit"
              textContent={authType}
              widthClasses="w-32"
              heightClasses="h-10"
            />
          </div>
          {error && <p>{error}</p>}
        </form>
      </GlareHover>
    </>
  );
};

export default AuthForm;
