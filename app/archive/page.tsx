import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectTable from "./projectTable";

const archive = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded  px-4 py-3 text-sm font-bold uppercase tracking-widest text-black dark:text-white focus-visible:translate-x-0"
      >
        Skip to Content
      </a>
      <div className="lg:py-24">
        <Link
          className="group mb-2 inline-flex items-center font-semibold leading-tight  dark:text-slate-300  text-blue-700"
          href="/"
        >
          <FaArrowRightLong className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" />
          Anand Roy
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-dark dark:text-slate-200 sm:text-5xl">
          All Projects
        </h1>
        <ProjectTable />
      </div>
    </div>
  );
};

export default archive;
