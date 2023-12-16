import React from "react";
import TableHead from "./tableHead";
import TableBody from "./tableBody";

const ProjectTable = () => {
  return (
    <table id="content" className="mt-12 w-full border-collapse text-left">
      <TableHead />
      <TableBody />
    </table>
  );
};

export default ProjectTable;
