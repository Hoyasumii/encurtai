"use client";

import { type ComponentProps, useContext } from "react";
import { twMerge } from "tailwind-merge";
import Context from "./Context";

type Props = ComponentProps<"button"> & {
	children?: never;
};

function Overlay({ className, ...props }: Props) {
	const { setOpen } = useContext(Context);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<button
			type="button"
			onClick={handleClose}
			className={twMerge(
				"z-20 w-full h-full bg-slate-950/35 backdrop-blur absolute",
				className,
			)}
			{...props}
		/>
	);
}

export default Overlay;
