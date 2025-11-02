"use client";

import Logo from "../UI/Input/Logo/Logo";
import SearchBox from "../SearchBox/SearchBox";
import LinkButton from "../UI/Input/Button/LinkButton";
import { useSearchStore } from "@/lib/store/searchStore";

const Header = () => {
  const { query, setQuery } = useSearchStore();
  return (
    <header className=" bg-transparent border-b border-b-cyan-900 p-4 flex justify-between items-center">
      <div className="flex align-middle justify-center gap-3 ">
        <Logo />
        <SearchBox value={query} onSearch={setQuery} />
      </div>

      <LinkButton
        href="/notes/action/create"
        textContent="Create +"
        TWclasses="h-10"
      />
    </header>
  );
};

export default Header;
