"use client";

import { ComponentProps, ReactNode, useContext, useRef } from "react";
import Context from "./Context";

type Props = ComponentProps<"input"> & {
  type?: never;
  name?: never;
  id?: never;
  hidden?: never;
  children: ReactNode;
};

function File({ children, ...props }: Props) {
  const name = useContext(Context);
  const file = useRef<HTMLInputElement>(null);

  const handleSelect = () => {
    file.current?.click();
  };

  return (
    <>
      <input type="file" ref={file} name={name} id={name} {...props} hidden />
      <button onClick={handleSelect}>{children}</button>   
    </>
  );
}
export default File;
