import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"button">;

function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={twMerge(
        "transition-all duration-300 hover:brightness-95 active:brightness-90  px-3 py-2 text-white rounded-lg font-medium lowercase",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
