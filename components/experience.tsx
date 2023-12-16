"use client";
import React from "react";
import ExperienceCard from "./experience-card";
import { experience } from "@/lib/data";
import { GoArrowRight } from "react-icons/go";
import { useSectionInView } from "@/lib/hooks";

const Experience = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experience.map((exp, idx) => (
            <React.Fragment key={idx}>
              <ExperienceCard {...exp} />
            </React.Fragment>
          ))}
        </ol>

        <div className="mt-12">
          <a
            className="inline-flex items-center leading-tigh font-semibold text-neutral-950 dark:text-slate-200 group"
            aria-label="View Full Résumé"
            href="/resume.pdf"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-neutral-950 dark:group-hover:border-teal-300 motion-reduce:transition-none">
                View Full &nbsp;
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-neutral-950 dark:group-hover:border-teal-300 motion-reduce:transition-none">
                  Résumé
                </span>
                <GoArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
