import { motion } from "framer-motion";

export default function () {
	return (
		<motion.div
			className="linkCardFilter absolute inset-0 bg-my-dark/50 backdrop-blur-[1px]"
			initial={{ opacity: 0 }}
		/>
	);
}
