import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"div">;

function Content({ className, children, ...props }: Props) {
  return (
    <div
      className={twMerge(
        "z-30 bg-slate-50 mt-20 w-1/2 h-fit rounded-xl p-4 flex flex-col gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Content;
