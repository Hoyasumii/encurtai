"use client";

import { Dispatch, SetStateAction } from "react";

type Props = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

function Switch({ active, setActive }: Props) {
  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      onClick={toggleActive}
      className="bg-blue-950 border border-blue-950 w-16 h-8 rounded-full p-0.5 cursor-pointer group"
    >
      <div
        data-active={active}
        className="transition-all duration-300 bg-slate-50 h-full aspect-square rounded-full translate-x-0 data-[active=true]:translate-x-8 group-hover:bg-slate-100 group-active:bg-slate-200"
      />
    </div>
  );
}
export default Switch;
