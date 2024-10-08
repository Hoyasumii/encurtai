import { Flame } from "lucide-react";
import { ComponentProps } from "react";
import Tag from "./Tag";

type Props = ComponentProps<"div"> & {
  theme?: "light" | "dark";
  className?: never;
  children?: never;
};

function Logo({ theme = "light", ...props }: Props) {
  return (
    <div
      data-theme={theme}
      className="flex items-center gap-1 group text-blue-950 data-[theme=dark]:text-blue-50 select-none"
      {...props}
    >
      <Flame fontSize={30} className="fill-blue-300 text-blue-700 font-bold" />
      <strong className="text-xl lowercase font-semibold">encurtai.com</strong>
      <Tag className="group-data-[theme=dark]:bg-blue-50 group-data-[theme=dark]:text-blue-950 self-start">
        {process.env.VERSION}
      </Tag>
    </div>
  );
}
// TODO: Colocar dados do .ENV
export default Logo;
