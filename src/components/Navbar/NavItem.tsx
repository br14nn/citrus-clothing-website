import { motion, useAnimate } from "framer-motion";

type NavItemProps = {
	children: React.ReactNode;
};

export default function (props: NavItemProps) {
	const [scope, animate] = useAnimate();
	const [scopeMobile, animateMobile] = useAnimate();

	const navItemOnHover = () => {
		animate(".horizontal-line", { scaleX: 1 }, { type: "tween" });
		animate(scope.current, { color: "rgb(243, 243, 243)" });
	};

	const navItemNotOnHover = () => {
		animate(".horizontal-line", { scaleX: 0 }, { type: "tween" });
		animate(scope.current, { color: "rgb(243, 243, 243, 0.5)" });
	};

	const navItemOnHoverMobile = () => {
		animateMobile(".horizontal-line", { scaleX: 1 }, { type: "tween" });
	};

	const navItemNotOnHoverMobile = () => {
		animateMobile(".horizontal-line", { scaleX: 0 }, { type: "tween" });
	};

	return (
		<li>
			<motion.a
				className="relative block leading-none text-my-white/50 mobile:hidden"
				href="#"
				ref={scope}
				onHoverStart={navItemOnHover}
				onHoverEnd={navItemNotOnHover}
			>
				{props.children}

				<motion.hr
					className="horizontal-line absolute -bottom-[6px] w-full border-[1.5px] border-my-white"
					initial={{ scaleX: 0, originX: "left" }}
				/>
			</motion.a>

			<motion.a
				className="relative hidden leading-none text-my-dark mobile:block"
				href="#"
				ref={scopeMobile}
				onHoverStart={navItemOnHoverMobile}
				onHoverEnd={navItemNotOnHoverMobile}
			>
				{props.children}

				<motion.hr
					className="horizontal-line absolute -bottom-[6px] w-full border-[1.5px] border-my-dark"
					initial={{ scaleX: 0, originX: "left" }}
				/>
			</motion.a>
		</li>
	);
}
