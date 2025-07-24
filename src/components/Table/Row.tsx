"use client";

import React, { useContext } from "react";
import Context from "./Context";

type Props = {
  className: string;
};

function Row({ className }: Props) {
  const { setRow } = useContext(Context);

  setRow(className);

  return <></>;
}

export default Row;
