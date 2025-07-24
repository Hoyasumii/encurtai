"use client";

import { type ComponentProps, useContext } from "react";
import Context from "./Context";

type Props = ComponentProps<"button"> & {
  onClick?: never;
};

function Close({ children, ...props }: Props) {
  const {setOpen} = useContext(Context);

  const handleOpen = () => {
    setOpen(false);
  }

  return <button onClick={handleOpen} {...props}>{children}</button>;
}

export default Close;
