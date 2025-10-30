"use client";

import React, { useState } from "react";
import css from "./SignUp.module.css";
import { useRouter } from "next/navigation";
import { getMe, register, RegisterRequest } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import * as z from "zod";
import Logo from "@/components/Logo/Logo";

const SignUpPage = () => {
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
      await register(formValues);
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
    <div className="flex flex-col h-screen w-screen  ">
      <Logo />
      <div className="flex flex-1 justify-center items-center flex-col self-center  ">
        <form
          action={handleSubmit}
          className="border border-sky-900 rounded-3xl p-8"
        >
          <h1 className="text-xl font-bold text-cyan-800 text-center mb-2">
            Sign up
          </h1>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-normal text-cyan-800 ml-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              className="flex flex-col gap-2 mb-4 border border-sky-900 rounded-xl  p-2 w-64"
            />
          </div>

          <div className="flex flex-col  mb-4">
            <label
              htmlFor="password"
              className="text-sm font-normal text-cyan-800 ml-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="flex flex-col gap-2 mb-4 border border-sky-900 rounded-xl p-2 w-64"
            />
          </div>

          <div>
            <button type="submit">Register</button>
          </div>

          <p className={css.error}>{error && <p>{error}</p>}</p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
