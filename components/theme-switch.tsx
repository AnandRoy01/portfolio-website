import React from "react";
import { useTheme } from "@/context/theme-context";
import { PiMoonStars } from "react-icons/pi";
import { GoSun } from "react-icons/go";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return theme === "light" ? (
    <PiMoonStars
      className="block hover:scale-125 dark:hover:text-slate-200"
      onClick={toggleTheme}
    />
  ) : (
    <GoSun
      className="block hover:scale-125 dark:hover:text-slate-200"
      onClick={toggleTheme}
    />
  );
};

export default ThemeSwitch;
