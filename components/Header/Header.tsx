"use client";
import Link from "next/link";
import css from "./Header.module.css";
import TagsMenu from "../TagsMenu/TagsMenu";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className=" bg-transparent border-b border-b-slate-800 p-4 flex justify-between items-center">
      <Logo />
      <nav className={css.mainNavigation} aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <TagsMenu />
          </li>
        </ul>

        <ul className={css.navigation}>
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
