import { motion } from "framer-motion";
import CloseNavButton from "./CloseNavButton";
import NavItem from "./NavItem";
import UserIcon from "../../assets/svg/user.svg";
import BagIcon from "../../assets/svg/bag.svg";
import BagIconDark from "../../assets/svg/bagDark.svg";
import UserIconDark from "../../assets/svg/userDark.svg";
import NavButton from "./NavButton";

type NavItemsContainerProps = {
	onClickCloseNavButton?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function (props: NavItemsContainerProps) {
	return (
		<motion.div
			className="flex flex-row items-center mobile:fixed mobile:top-0 mobile:z-20 mobile:h-screen mobile:w-[65%] mobile:flex-col mobile:items-stretch mobile:justify-start mobile:bg-my-white mobile:p-[30px]"
			id="navMenu"
			initial={{ right: "-100vw" }}
		>
			<CloseNavButton onClick={props.onClickCloseNavButton} />

			<ul className="font-dosis flex flex-row items-center justify-center gap-[5rem] tablet:gap-[3rem] mobile:mt-[20px] mobile:flex-col mobile:items-start mobile:gap-[20px] mobile:text-my-dark">
				<NavItem>HOME</NavItem>
				<NavItem>SHOP</NavItem>
				<NavItem>PRODUCTS</NavItem>
				<NavItem>ABOUT US</NavItem>
			</ul>

			<div className="ml-auto flex w-fit flex-row gap-x-[20px] mobile:ml-0 mobile:mt-[30px] mobile:w-full mobile:justify-center mobile:gap-x-[50px]">
				<NavButton
					navButtonIconSize={`w-[20px] h-[26px]`}
					navButtonIcon={UserIcon}
					navButtonIcon_1={UserIconDark}
					navButtonAlt="User Icon"
				/>
				<NavButton
					navButtonIconSize={`w-[26px] h-[28px]`}
					navButtonIcon={BagIcon}
					navButtonIcon_1={BagIconDark}
					navButtonAlt="Bag Icon"
				/>
			</div>
		</motion.div>
	);
}
