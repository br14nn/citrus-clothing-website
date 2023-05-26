import { motion } from "framer-motion";

export default function () {
	return (
		<motion.div
			className="absolute inset-0 z-10 bg-my-dark/50 backdrop-blur-[1px]"
			initial={{ opacity: 0 }}
			id="linkCardFilter"
		/>
	);
}
