"use client";

import { ReactNode, useState } from "react";
import Context from "./Context";

function Root({
  children,
  initialState = "closed",
}: {
  children: ReactNode;
  initialState?: "open" | "closed";
}) {
  const [open, setOpen] = useState<boolean>(initialState === "open");

  return (
    <Context.Provider value={{ open, setOpen }}>{children}</Context.Provider>
  );
}

export default Root;
