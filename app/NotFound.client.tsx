"use client";
import Doorway from "@/components/UI/Doorway/Doorway";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NotFoundClient = () => {
  const router = useRouter();

  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <>
      <div className="flex h-lvh flex-col-reverse sm:flex-row p-3 sm:justify-center gap-4 sm:items-center overflow-y-auto flex-1">
        <div className="flex flex-col gap-5 max-w-[600]">
          <h1 className="text-xl sm:text-2xl font-bold">404</h1>
          <p className="text-xl sm:text-2xl font-bold">
            Looks like you&apos;ve found the doorway to the great nothing!
          </p>

          <p>
            You will be redirected to the homepage in {}
            {countdown > 0 ? countdown : 0} seconds.
          </p>
        </div>

        <Doorway />
      </div>
      {/* ======================================= */}
    </>
  );
};

export default NotFoundClient;
