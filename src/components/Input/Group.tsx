"use client";

import { ComponentProps, useContext } from "react";
import { twMerge } from "tailwind-merge";
import Context from "./Context";

type Props = ComponentProps<"label"> & {
  htmlFor?: never;
};

function Group({ className, children, ...props }: Props) {
  const name = useContext(Context);

  return (
    <label
      className={twMerge(
        "duration-300 transition-all flex gap-2 py-2 px-3 border border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-rose-50 rounded-lg items-center group",
        className
      )}
      htmlFor={name}
      {...props}
    >
      {children}
    </label>
  );
}

export default Group;
