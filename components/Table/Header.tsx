"use client";

import { useContext } from "react";
import Context from "./Context";
import { twMerge } from "tailwind-merge";

function Header({ className }: { className?: string }) {
  const { data, cell, row } = useContext(Context);

  return (
    <thead className={twMerge("", className)}>
      <tr className={row}>
        {Object.keys(data[0]).map((row, index) => (
          <th key={`thead-${row}-${index}`} className={cell}>
            {row}
          </th>
        ))}
      </tr>
    </thead>
  );
}
export default Header;
