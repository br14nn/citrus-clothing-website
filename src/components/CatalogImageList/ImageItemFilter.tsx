import { motion } from "framer-motion";

type ImageItemFilterProps = {
	extraClass: string;
};

export default function (props: ImageItemFilterProps) {
	return (
		<>
			<motion.div
				className={`${props.extraClass} absolute inset-0 bg-my-dark/50 backdrop-blur-[1px]`}
				initial={{ opacity: 0 }}
			/>
		</>
	);
}
