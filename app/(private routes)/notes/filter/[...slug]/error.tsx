"use client";

import Doorway from "@/components/UI/Doorway/Doorway";

import Button from "@/components/UI/Button/Button";
import { IoReloadOutline } from "react-icons/io5";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  console.error("Error message:", error.message);
  return (
    <div className="flex  flex-col-reverse sm:flex-row p-3 sm:justify-center gap-4 sm:items-center overflow-y-auto flex-1">
      <div className="flex flex-col gap-5 max-w-[600]">
        <p className="text-xl sm:text-2xl font-bold">
          Looks like you&apos;ve found the doorway to the great nothing!
        </p>

        <p>
          Sorry about that! Pleace try to reload page or visit our homepage to
          get where need to go
        </p>
        <Button
          textContent=" Reload"
          icon={<IoReloadOutline />}
          TWclasses=" mx-auto gap-3"
          onClick={() => reset()}
        ></Button>
      </div>

      <Doorway />
    </div>
  );
};
export default Error;
