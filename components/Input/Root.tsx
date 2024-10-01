"use client";

import { ComponentProps } from "react";
import Context from "./Context";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"label"> & {
  name: string;
  htmlFor?: never;
};

function Root({ name, children, className, ...props }: Props) {
  return (
    <Context.Provider value={name}>
      <label
        className={twMerge(
          "duration-300 transition-all flex gap-2 py-2 px-3 border border-slate-300 focus-within:border-rose-500 focus-within:ring-2 focus-within:ring-rose-50 rounded-lg items-center group",
          className
        )}
        {...props}
      >
        {children}
      </label>
    </Context.Provider>
  );
}

export default Root;
