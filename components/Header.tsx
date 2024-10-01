import { Flame } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b border-b-slate-900/10 py-4 px-6 flex gap-1 items-center">
      <Flame className="fill-orange-300 text-rose-500" />
      <strong className="text-xl lowercase font-semibold text-rose-900">
        encurtai.com
      </strong>
    </header>
  );
}
