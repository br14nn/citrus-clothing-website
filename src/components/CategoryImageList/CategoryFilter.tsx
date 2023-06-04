import { motion } from "framer-motion";

type CategoryFilterProps = {
	categoryFilterClassName?: string;
};

export default function (props: CategoryFilterProps) {
	return (
		<motion.div
			className={`${props.categoryFilterClassName} absolute inset-0 bg-black/50 backdrop-blur-[1px]`}
			initial={{ opacity: 0 }}
		/>
	);
}
