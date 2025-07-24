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
  const [isOpened, setIsOpened] = useState(open);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setIsOpened(open);
        document.body.classList.remove("overflow-hidden");
      }, 250);
      return;
    }

    setIsOpened(open);
    document.body.classList.add("overflow-hidden");
  }, [open]);

  return mounted
    ? createPortal(
        <div
          data-state={isOpened ? "open" : "closed"}
          className={`${HankenGroteskFF.className} fixed z-10 bg-transparent w-svw h-svh data-[state=closed]:hidden flex justify-center`}
        >
          {children}
        </div>,
        document.body
      )
    : null;
}

export default Portal;
