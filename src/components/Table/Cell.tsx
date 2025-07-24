"use client";

import { useContext } from "react";
import Context from "./Context";

type Props = {
  className: string;
};

function Cell({ className }: Props) {
  const { setCell } = useContext(Context);

  setCell(className);

  // biome-ignore lint/complexity/noUselessFragments: <Muita coisa pra fazer>
  return <></>;
}

export default Cell;
