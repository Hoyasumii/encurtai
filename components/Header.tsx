import { Flame } from "lucide-react";
import Button from "./Button";
import Tag from "./Tag";

export function Header() {
  return (
    <header className="w-full py-6 px-2 xl:px-44 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Flame
          fontSize={30}
          className="fill-blue-300 text-blue-700 font-bold"
        />
        <strong className="text-xl lowercase font-semibold text-blue-950">
          encurtai.com
        </strong>
        <Tag className="self-start">demo 1</Tag>
      </div>

      <Button
        className="capitalize select-none border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 active:bg-blue-100 cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-50 disabled:border-blue-200 disabled:text-blue-200 disabled:pointer-events-none"
        disabled
      >
        Dashboard
      </Button>
    </header>
  );
}
