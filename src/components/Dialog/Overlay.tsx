"use client";

import { ComponentProps, useContext } from "react";
import { twMerge } from "tailwind-merge";
import Context from "./Context";

type Props = ComponentProps<"div"> & {
  children?: never;
};

function Overlay({ className, ...props }: Props) {
  const { setOpen } = useContext(Context);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      onClick={handleClose}
      className={twMerge(
        "z-20 w-full h-full bg-slate-950/35 backdrop-blur absolute",
        className
      )}
      {...props}
    />
  );
}

export default Overlay;
