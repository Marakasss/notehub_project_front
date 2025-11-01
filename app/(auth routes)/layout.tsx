"use client";
import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    startTransition(() => {
      router.refresh();
    });
  }, [router]);

  return <>{isPending ? <div>Loading...</div> : children}</>;
};

export default AuthLayout;
