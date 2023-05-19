import { motion } from "framer-motion";

type NavigationBackgroundProps = {
	onClick: React.MouseEventHandler<HTMLDivElement>;
};

export default function (props: NavigationBackgroundProps) {
	return (
		<motion.div
			className="hidden mobile:fixed mobile:inset-0 mobile:z-10 mobile:block mobile:h-screen mobile:w-screen mobile:bg-black/50"
			id="navBackground"
			initial={{ display: "none" }}
			onClick={props.onClick}
		/>
	);
}
