"use client";

import { useContext } from "react";
import Context from "./Context";
import { twMerge } from "tailwind-merge";

function Body({ className }: { className?: string }) {
  const { data, cell, row } = useContext(Context);

  return (
    <tbody className={twMerge("", className)}>
      {Object.values(data).map((rowValue, rowIndex) => (
        <tr key={`tbody-${rowIndex}`} className={row}>
          {Object.values(rowValue).map((col, columnIndex) => (
            <td key={`tbody-${rowIndex}-${columnIndex}`} className={twMerge("", cell)}>
              {col}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
export default Body;
