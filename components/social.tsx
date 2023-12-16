import React from "react";
import { social } from "@/lib/data";
import ThemeSwitch from "./theme-switch";

const Social = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {social.map((item) => (
        <li className="mr-5" key={item.name}>
          <a
            className="block hover:scale-125 dark:hover:text-slate-200"
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${item.name} (opens in a new tab)`}
          >
            <span className="sr-only">{item.name}</span>
            {item.icon}
          </a>
        </li>
      ))}
      <li className="mr-5">
        <ThemeSwitch />
      </li>
    </ul>
  );
};

export default Social;
