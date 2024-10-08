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
      className="bg-blue-950 border border-blue-900 w-16 h-8 rounded-full p-0.5 cursor-pointer group"
    >
      <div
        data-active={active}
        className="transition-all duration-300 bg-yellow-100 h-full aspect-square rounded-full translate-x-0 data-[active=true]:translate-x-8 group-hover:brightness-95 group-active:brightness-90"
      />
    </div>
  );
}

export default Switch;
