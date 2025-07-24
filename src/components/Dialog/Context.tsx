"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type Context = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default createContext<Context>({
  open: false,
  setOpen() {},
});
