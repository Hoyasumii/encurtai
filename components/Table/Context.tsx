"use client";

import { createContext } from "react";

type Context<T extends object> = {
  data: Array<T>;
  cell: string;
  setCell: React.Dispatch<React.SetStateAction<string>>;
  row: string;
  setRow: React.Dispatch<React.SetStateAction<string>>;
};

export default createContext<Context<object>>({
  data: [],
  cell: "",
  row: "",
  setCell() {},
  setRow() {},
});
