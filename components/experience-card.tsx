import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

type experienceCardProps = {
  duration: string;
  company: string;
  companyLink: string;
  position: string;
  prevPosition: string[];
  description: string;
  technologies: string[];
};
const ExperienceCard = ({
  duration,
  company,
  companyLink,
  position,
  prevPosition,
  description,
  technologies,
}: experienceCardProps) => {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/30 lg:hover:backdrop-blur  dark:lg:group-hover:bg-slate-800/50 dark:lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] dark:lg:group-hover:drop-shadow-lg"></div>

        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label={duration}
        >
          {duration}
        </header>

        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <Link
                className="inline-flex items-baseline font-medium leading-tight text-neutral-950 dark:text-slate-200 hover:text-neutral-950 dark:hover:text-teal-300 dark:focus-visible:text-teal-300  group/link text-base"
                href={companyLink}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${position} . ${company} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {position} .{" "}
                  <span className="inline-block">
                    {company}
                    <GoArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                  </span>
                </span>
              </Link>
            </div>

            {prevPosition.map((item: string) => (
              <div key={item}>
                <div className="text-slate-500" aria-hidden="true">
                  {item}
                </div>
              </div>
            ))}
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li className="mr-1.5 mt-2" key={tech}>
                <div className="flex items-center rounded-full bg-blue-100 text-blue-800 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ExperienceCard;
