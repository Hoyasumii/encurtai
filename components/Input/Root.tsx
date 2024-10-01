"use client";

import { ReactNode } from "react";
import Context from "./Context";

type Props = {
  name: string;
  children: ReactNode;
};

function Root({ name, children }: Props) {
  return (
    <Context.Provider value={name}>
      <div className="duration-300 transition-all flex gap-2 py-2 px-3 border border-slate-300 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-50 rounded-lg items-center group">
        {children}
      </div>
    </Context.Provider>
  );
}

export default Root;
