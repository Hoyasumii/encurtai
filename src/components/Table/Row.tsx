"use client";

import { useContext } from "react";
import Context from "./Context";

type Props = {
  className: string;
};

function Row({ className }: Props) {
  const { setRow } = useContext(Context);

  setRow(className);

  // biome-ignore lint/complexity/noUselessFragments: <Muita coisa pra fazer>
  return <></>;
}

export default Row;
