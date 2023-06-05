import { motion, useAnimate } from "framer-motion";

type NavButtonType = {
	navButtonIcon: string;
	navButtonIconSize: string;
	navButtonIcon_1: string;
	navButtonAlt: string;
};

export default function (props: NavButtonType) {
	const [scope, animate] = useAnimate();
	const [scopeMobile, animateMobile] = useAnimate();

	const navButtonOnHover = () => {
		animate(scope.current, { borderColor: "rgb(243, 243, 243, 1)" });
	};

	const navButtonNotOnHover = () => {
		animate(scope.current, { borderColor: "rgb(243, 243, 243, 0)" });
	};

	const navButtonOnHoverMobile = () => {
		animateMobile(scopeMobile.current, { borderColor: "rgb(26, 26, 26, 1)" });
	};

	const navButtonNotOnHoverMobile = () => {
		animateMobile(scopeMobile.current, { borderColor: "rgb(26, 26, 26, 0)" });
	};

	return (
		<>
			<motion.button
				className="flex h-[40px] w-[40px] items-center justify-center rounded-full mobile:hidden"
				ref={scope}
				initial={{ border: "2px solid transparent" }}
				onHoverStart={navButtonOnHover}
				onHoverEnd={navButtonNotOnHover}
			>
				<img
					className={`${props.navButtonIconSize}`}
					src={props.navButtonIcon}
					alt={props.navButtonAlt}
				/>
			</motion.button>

			<motion.button
				className="hidden h-[40px] w-[40px] items-center justify-center rounded-full mobile:flex"
				ref={scopeMobile}
				initial={{ border: "2px solid transparent" }}
				onHoverStart={navButtonOnHoverMobile}
				onHoverEnd={navButtonNotOnHoverMobile}
			>
				<img
					className={`${props.navButtonIconSize}`}
					src={props.navButtonIcon_1}
					alt={props.navButtonAlt}
				/>
			</motion.button>
		</>
	);
}
