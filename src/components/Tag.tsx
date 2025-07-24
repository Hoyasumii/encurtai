import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"div">;

function Tag({ className, children, ...props }: Props) {
  return (
    <div
      className={twMerge(
        "bg-stone-800 rounded-full p-1 text-center font-bold uppercase text-[.5rem] leading-none text-white select-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Tag;
