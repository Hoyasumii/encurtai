"use client";

import { ReactNode, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Context from "./Context";
import { Hanken_Grotesk } from "next/font/google";

type Props = {
  children: ReactNode;
};

const HankenGroteskFF = Hanken_Grotesk({
  subsets: ["latin"],
});


function Portal({ children }: Props) {
  const { open } = useContext(Context);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted
    ? createPortal(
        <div
          data-state={open ? "open" : "closed"}
          className={`${HankenGroteskFF.className} fixed z-10 bg-transparent w-svw h-svh data-[state=closed]:hidden flex justify-center`}
        >
          {children}
        </div>,
        document.body
      )
    : null;
}

export default Portal;
