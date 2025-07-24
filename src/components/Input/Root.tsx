"use client";

import type { ReactNode } from "react";
import Context from "./Context";

type Props = {
  name: string;
  children: ReactNode;
};

function Root({ name, children }: Props) {
  return <Context.Provider value={name}>{children}</Context.Provider>;
}

export default Root;
