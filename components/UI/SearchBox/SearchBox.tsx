"use client";
import { usePathname, useRouter } from "next/navigation";
import Input from "../Input/Input";
import { useEffect } from "react";

interface SearchBoxProps {
  onSearch: (value: string) => void;
  value: string;
}

const SearchBox = ({ value, onSearch }: SearchBoxProps) => {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    router.prefetch("/notes/filter/All");
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!pathname.startsWith("/notes/filter")) {
      router.push("/notes/filter/All");
      onSearch(newValue);
      return;
    }

    onSearch(newValue);
  };
  return (
    <Input
      id="search"
      value={value}
      onChange={handleChange}
      type="text"
      placeholder="Search notes"
      style={{ height: "42px", alignSelf: "center" }}
    />
  );
};

export default SearchBox;
