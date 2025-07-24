"use client";

import React, { useContext } from "react";
import Context from "./Context";

type Props = {
  className: string;
};

function Cell({ className }: Props) {
  const { setCell } = useContext(Context);

  setCell(className);

  return <></>;
}

export default Cell;
