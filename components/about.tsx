"use client";
import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import React from "react";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Hey there! I'm{" "}
          <span className="font-medium dark:text-slate-200 text-neutral-950  dark:hover:text-teal-300 ">
            Anand
          </span>
          , and I'm passionate about crafting things for the web. My fascination
          with{" "}
          <span className="font-medium dark:text-slate-200 text-neutral-950  hover:text-teal-300">
            {" "}
            web development
          </span>{" "}
          ignited in 2012 when I logged into Facebook for the first time. I was
          greatly inspired by the ability to connect with friends through a
          digital platform. Over the years, I've had the opportunity to
          contribute to software for an E-commerce company, an early-stage
          start-up, and even a unicorn.
        </p>
        <p className="mb-4">
          My main focus these days is building products and leading projects for
          our clients at{" "}
          <Link
            className="font-medium text-blue-700 hover:text-blue-700 dark:text-slate-200 dark:hover:text-teal-300"
            href="https://www.nineleaps.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Nineleaps (opens in a new tab)"
          >
            Nineleaps.
          </Link>
        </p>
        <p>
          When I'm not at the computer, I'm usually learn/play guitar, go out
          and explore new places.
        </p>
      </div>
    </section>
  );
};

export default About;
