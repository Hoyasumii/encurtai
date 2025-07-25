import type {
	ComponentProps,
	ForwardRefExoticComponent,
	RefAttributes,
} from "react";
import type { LucideProps } from "lucide-react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"svg"> & {
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
	>;
	children?: never;
};

function Prefix({ icon, className, ...props }: Props) {
	const Icon = icon;

	return (
		<Icon
			size="18"
			className={twMerge(
				"duration-300 transition-all text-slate-400 group-focus-within:text-blue-600",
				className,
			)}
			{...props}
		/>
	);
}

export default Prefix;
