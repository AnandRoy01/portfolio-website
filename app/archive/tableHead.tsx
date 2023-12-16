import { tableHeadings } from "@/lib/data";
import clsx from "clsx";
import React from "react";

const TableHead = () => {
  return (
    <thead className="sticky top-0 z-10 border-b  dark:border-slate-700 dark:border-slate-300/10  px-6 py-5 backdrop-blur">
      <tr>
        {tableHeadings.map((heading, index) => (
          <th
            key={heading}
            className={clsx(
              "py-4 pr-8 text-sm font-semibold text-[#000] dark:text-slate-200",
              {
                "hidden lg:table-cell": index > 1 && index < 4,
                "hidden sm:table-cell": index >= 4,
                "whitespace-nowrap": heading === "Made At",
              }
            )}
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
