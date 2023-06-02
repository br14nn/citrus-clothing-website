import { motion } from "framer-motion";

type ButtonFilterProps = {
	children: React.ReactNode;
};

export default function (props: ButtonFilterProps) {
	return (
		<motion.button
			className="font-dosis rounded-[20px] border border-my-dark px-[20px] py-[8.5px] leading-none text-my-dark"
			whileHover={{ borderColor: "#C3F400", backgroundColor: "#C3F400" }}
		>
			{props.children}
		</motion.button>
	);
}
