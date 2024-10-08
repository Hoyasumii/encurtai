"use client";

import { ReactNode, useEffect, useState } from "react";
import Context from "./Context";

function Root({
  children,
  initialState = "closed",
}: {
  children: ReactNode;
  initialState?: "open" | "closed";
}) {
  const [open, setOpen] = useState<boolean>(initialState === "open");

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      return;
    }

    document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <Context.Provider value={{ open, setOpen }}>{children}</Context.Provider>
  );
}

export default Root;
