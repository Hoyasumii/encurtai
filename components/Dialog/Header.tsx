"use client";

import { X } from "lucide-react";
import { ComponentProps, useContext } from "react";
import Context from "./Context";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"div"> & {
  children?: never;
  title: string;
  hasCloseButton?: boolean;
};

function Header({ className, title, hasCloseButton, ...props }: Props) {
  const { setOpen } = useContext(Context);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={twMerge(
        "border-b pb-2 border-b-slate-200 flex justify-between items-center",
        className
      )}
      {...props}
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      {hasCloseButton && (
        <X
          onClick={handleClose}
          className="hover:bg-slate-100 active:bg-slate-200 rounded-md p-1"
          size={30}
        />
      )}
    </div>
  );
}

export default Header;
