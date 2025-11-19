import { useMemo } from "react";

export const useClientPortalTarget = () => {
  return useMemo(() => {
    if (typeof window === "undefined") return null;
    return document.body;
  }, []);
};
