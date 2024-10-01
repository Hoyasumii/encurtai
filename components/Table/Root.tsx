"use client";

import { ComponentProps, useState } from "react";
import Context from "./Context";
import { twMerge } from "tailwind-merge";

type Props<T extends object> = ComponentProps<"table"> & {
  data: Array<T>;
};

function Root<T extends object>({
  data,
  className,
  children,
  ...props
}: Props<T>) {
  const [cell, setCell] = useState<string>("");
  const [row, setRow] = useState<string>("");

  return (
    <Context.Provider
      value={{
        data,
        row,
        setRow,
        cell,
        setCell,
      }}
    >
      {data.length > 0 && (
        <table className={twMerge("", className)} {...props}>
          {children}
        </table>
      )}
    </Context.Provider>
  );
}

export default Root;
