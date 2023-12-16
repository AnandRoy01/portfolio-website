import { fullProjectDetails } from "@/lib/data";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const TableBody = () => {
  return (
    <tbody>
      {fullProjectDetails.map(
        ({ project, year, projectLink, madeAt, tech, linkText }) => (
          <tr
            key={project}
            className="border-b border-slate-300 dark:border-slate-300/10 last:border-none"
          >
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">{year}</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-black dark:text-slate-200 dark:hover:text-slate-200 sm:hidden group/link text-base"
                    href={projectLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project} (opens in a new tab)`}
                  >
                    <span>
                      {" "}
                      <span className="inline-block">
                        {project}
                        <GoArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden text-sm font-normal text-black dark:text-slate-400  sm:block  whitespace-nowrap">
                  {project}
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">{madeAt}</div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                {tech.map((item) => (
                  <li key={item} className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full  bg-blue-100 text-blue-800 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight  text-black  dark:text-slate-400 dark:hover:text-slate-200  group/link text-sm"
                    href={projectLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="apps.apple.com (opens in a new tab)"
                  >
                    <span>
                      {" "}
                      <span className="inline-block text-black dark:text-slate-400 dark:hover:text-slate-200 whitespace-nowrap">
                        {linkText}
                        <GoArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        )
      )}
    </tbody>
  );
};

export default TableBody;
