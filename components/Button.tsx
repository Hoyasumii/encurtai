import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "transition-all duration-300 px-3 py-2 rounded-lg font-medium capitalize select-none disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer",
  variants: {
    theme: {
      default:
        "text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-slate-200 disabled:text-slate-400",
      outline:
        "border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 active:bg-blue-100 disabled:bg-slate-50 disabled:border-blue-200 disabled:text-blue-200",
    },
  },
  defaultVariants: {
    theme: "default",
  },
});

type Props = VariantProps<typeof button> & ComponentProps<"button">;

function Button({ children, className, theme, ...props }: Props) {
  return (
    <button className={button({ theme, class: className })} {...props}>
      {children}
    </button>
  );
}

export default Button;
