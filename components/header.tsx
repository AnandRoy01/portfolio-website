"use client";
import { sections } from "@/lib/data";
import React from "react";
import Social from "./social";
import { useActiveSectionContext } from "@/context/active-section-context";
import clsx from "clsx";
import { useTheme } from "@/context/theme-context";
import Link from "next/link";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme } = useTheme();
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight dark:text-slate-200  text-blue-700 sm:text-5xl">
          Anand Roy
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight dark:text-slate-200 text-black sm:text-xl">
          Experienced Front-End Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build exceptional and accessible digital experiences for the web.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {sections.map((section) => (
              <li key={section.hash}>
                <Link
                  className={clsx("group flex items-center py-3", {
                    active: section.name === activeSection,
                    dark: theme === "dark",
                  })}
                  href={section.hash}
                  onClick={() => {
                    setActiveSection(section.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  <span className="nav-indicator mr-4 h-px w-8 transition-all group-hover:w-16  group-focus-visible:w-16 bg-slate-400 dark:bg-slate-500 group-hover:text-black dark:text-slate-500 dark:group-hover:text-slate-200 dark:group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-black dark:text-slate-400 dark:group-hover:text-slate-200 dark:group-focus-visible:text-slate-200">
                    {section.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Social />
    </header>
  );
};

export default Header;
