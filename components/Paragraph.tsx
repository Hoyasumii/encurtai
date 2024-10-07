import { Hanken_Grotesk } from "next/font/google";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const HankenGroteskFF = Hanken_Grotesk({
  subsets: ["latin"],
});

type Props = ComponentProps<"p">;

const Paragraph = ({ className, children, ...props }: Props) => {
  return (
    <p
      className={twMerge(
        `${HankenGroteskFF.className} text-xl font-medium text-slate-600`,
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
