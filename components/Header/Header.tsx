"use client";

import Logo from "../UI/Logo/Logo";
import SearchBox from "../UI/SearchBox/SearchBox";
import { useSearchStore } from "@/lib/store/searchStore";
import SocialIconGroup from "../SocialIconGroup/SocialIconGroup";
import useIsMobile from "@/lib/hooks/use-is-mobile";

const Header = () => {
  const { query, setQuery } = useSearchStore();
  const { isMobile, isLoading } = useIsMobile();
  return (
    <header className=" bg-transparent border-b border-b-cyan-900 p-4 flex justify-between items-center">
      <div className="flex align-middle justify-between gap-3 w-full md:justify-center md:w-fit sm:gap-12 ">
        <Logo />
        <SearchBox value={query} onSearch={setQuery} />
      </div>
      {!isMobile && !isLoading && (
        <div className="flex gap-4 align-baseline justify-between ml-6">
          <p className="text-xs flex self-center">Contact me:</p>
          <SocialIconGroup />
        </div>
      )}
    </header>
  );
};

export default Header;
