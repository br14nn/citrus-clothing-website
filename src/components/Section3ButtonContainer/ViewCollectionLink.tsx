import { motion, useAnimate } from "framer-motion";
import ViewCollectionRightArrowDark from "../../assets/svg/viewCollectionArrowDark.svg";
import ViewCollectionRightArrowDarkSmall from "../../assets/svg/viewCollectionArrowDarkSmall.svg";

export default function () {
	const [scope, animate] = useAnimate();

	const viewCollectinLinkOnHover = () => {
		animate(".horizontal-line", { scaleX: 1 }, { type: "tween" });
	};

	const viewCollectionLinkNotOnHover = () => {
		animate(".horizontal-line", { scaleX: 0 }, { type: "tween" });
	};

	return (
		<motion.a
			className="font-roboto-condensed relative ml-auto flex flex-col text-[1.5rem] font-bold leading-none text-my-dark mobile:ml-0"
			href="#"
			ref={scope}
			onHoverStart={viewCollectinLinkOnHover}
			onHoverEnd={viewCollectionLinkNotOnHover}
		>
			<div className="flex flex-row gap-x-[25px] mobile:gap-x-[8px] mobile:text-[1rem]">
				View Collection{" "}
				<img
					className="h-[22px] w-[44px] mobile:hidden"
					src={ViewCollectionRightArrowDark}
					alt="Right Arrow"
				/>
				<img
					className="hidden h-[15px] w-[27px] mobile:block"
					src={ViewCollectionRightArrowDarkSmall}
					alt="Right Arrow"
				/>
			</div>

			<motion.hr
				className="horizontal-line absolute -bottom-[4px] w-full border-[1.5px] border-my-dark"
				initial={{ scaleX: 0, originX: "left" }}
			/>
		</motion.a>
	);
}
