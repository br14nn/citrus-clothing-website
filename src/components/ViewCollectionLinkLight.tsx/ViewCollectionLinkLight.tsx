import { motion, useAnimate } from "framer-motion";
import ViewCollectionArrow from "../../assets/svg/viewCollectionArrow.svg";

export default function () {
	const [scope, animate] = useAnimate();

	const viewCollectionLinkOnHover = () => {
		animate(".horizontal-line", { scaleX: 1 }, { type: "tween" });
	};

	const viewCollectionLinkNotOnHover = () => {
		animate(".horizontal-line", { scaleX: 0 }, { type: "tween" });
	};

	return (
		<motion.a
			className="w-fit text-[1.5rem] font-bold leading-none text-my-white"
			href="#"
			ref={scope}
			onHoverStart={viewCollectionLinkOnHover}
			onHoverEnd={viewCollectionLinkNotOnHover}
		>
			<div className="flex flex-row items-center gap-[20px]">
				<p>View Collection</p>
				<img
					className="right-arrow h-[22px] w-[44px]"
					src={ViewCollectionArrow}
					alt="right arrow"
				/>
			</div>
			<motion.hr
				className="horizontal-line mt-[8px] block border-[1.5px] border-my-white"
				initial={{ scaleX: 0, originX: "left" }}
			/>
		</motion.a>
	);
}
