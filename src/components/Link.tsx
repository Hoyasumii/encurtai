import type { ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"div">;

function Link({ children, className, ...props }: Props) {
  if ((children as ReactElement[]).length !== 2)
    throw new Error("Link Component must be have 2 elements");

  return (
    <div className={twMerge("flex", className)} {...props}>
      {children}
    </div>
  );
}

export default Link;
