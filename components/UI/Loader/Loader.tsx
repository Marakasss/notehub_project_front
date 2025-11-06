"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999]">
      <DotLottieReact
        className=" w-14 sm:w-24 bg-transparent"
        src="/TaskCycle.json"
        loop
        autoplay
      />
    </div>
  );
}
