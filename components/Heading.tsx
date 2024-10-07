import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Heading({ children }: Props) {
  return (
    <h1 className="text-5xl tracking-wider font-bold text-blue-950 text-center">
      {children}
    </h1>
  );
}

export default Heading;
