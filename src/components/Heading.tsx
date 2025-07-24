import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
};

function Heading({ children, className }: Props) {
  return (
    <h1 className={twMerge("text-4xl xl:text-6xl tracking-wider font-bold text-blue-950 w-fit", className)}>
      {children}
    </h1>
  );
}

export default Heading;
 