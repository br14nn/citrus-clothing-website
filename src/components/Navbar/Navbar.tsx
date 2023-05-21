import { useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";

import OpenNavButton from "./OpenNavButton";
import NavBackground from "./NavBackground";
import NavItemsContainer from "./NavItemsContainer";

export default function () {
	const navIsOpen = useRef<boolean>(false);
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const windowResized = () => {
			if (window.innerWidth >= 600 && navIsOpen.current === true) {
				//closoe the navbar
				closeNavigationMenu();
			}
		};

		window.addEventListener("resize", windowResized);
	});

	const openNavigationMenu = () => {
		animate("#navMenu", { right: "0vw" });
		animate("#navBackground", { display: "block" });

		navIsOpen.current = true;
	};

	const closeNavigationMenu = () => {
		animate("#navBackground", { display: "none" });
		animate("#navMenu", { right: "-100vw" });

		navIsOpen.current = false;
	};

	return (
		<nav
			ref={scope}
			className="text-my-white/50 mobile:fixed mobile:left-0 mobile:right-0 mobile:top-0 mobile:z-50 mobile:w-full mobile:bg-my-dark"
		>
			<div className="hidden mobile:flex mobile:flex-row mobile:justify-between mobile:p-[30px]">
				<div className="font-dosis flex flex-row items-center gap-x-[0.25rem] leading-none">
					<p className="font-bold text-my-green/70">CITRUS</p>
					<p>|</p>
					<p>PST. 2023</p>
				</div>

				<OpenNavButton onClick={openNavigationMenu} />
			</div>

			<NavItemsContainer onClickCloseNavButton={closeNavigationMenu} />

			<NavBackground onClick={closeNavigationMenu} />
		</nav>
	);
}
