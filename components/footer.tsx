import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <p className="text-gray-700 mb-4 dark:text-white/80  block text-xs">
      ©{new Date().getFullYear()} Anand. All rights reserved.
      <br />
      About this website: built with React & Next.js (App Router & Server
      Actions), TypeScript, Tailwind CSS, React Email & Resend, Vercel hosting
      and inspiration from{" "}
      <Link
        href="https://brittanychiang.com/"
        target="_blank"
        rel="noreferrer noopener"
        className="text-bold cursor-pointer"
        aria-label={`inspiration by Brittany Chiang (opens in a new tab)`}
      >
        Brittany Chiang
      </Link>
    </p>
  );
};

export default Footer;
