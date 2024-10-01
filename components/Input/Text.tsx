"use client";

import { ComponentProps, useContext } from "react";
import { twMerge } from "tailwind-merge";
import Context from "./Context";

type Props = ComponentProps<"input"> & {
  type?: never;
  name?: never;
  id?: never;
};

function Text({ className, ...props }: Props) {
  const name = useContext(Context);

  return (
    <input
      type="text"
      className={twMerge("outline-none caret-sky-600 placeholder-zinc-600 text-zinc-900", className)}
      name={name}
      id={name}
      {...props}
    />
  );
}
export default Text;
