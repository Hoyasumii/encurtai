"use client";

import { type ComponentProps, useContext } from "react";
import Context from "./Context";

type Props = ComponentProps<"button"> & {
  onClick?: never;
};

function Trigger({ children, ...props }: Props) {
  const {setOpen} = useContext(Context);

  const handleOpen = () => {
    setOpen(true);
  }

  return <button onClick={handleOpen} {...props}>{children}</button>;
}

export default Trigger;
