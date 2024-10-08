"use client";

import { ComponentProps, useContext } from "react";
import { twMerge } from "tailwind-merge";
import Context from "./Context";

type Props = ComponentProps<"div">;

function Content({ className, children, ...props }: Props) {
  const { open } = useContext(Context);

  return (
    <div
      data-state={open ? "open" : "closed"}
      className={twMerge(
        "z-30 bg-slate-50 mt-20 w-1/2 h-fit rounded-xl p-4 flex flex-col gap-4 data-[state=open]:animate-fade-in-scale data-[state=closed]:animate-fade-out-scale",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Content;
