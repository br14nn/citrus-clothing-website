import { motion } from "framer-motion";
import CloseNavButton from "./CloseNavButton";
import NavItem from "./NavItem";
import UserSvg from "../../assets/svg/user.svg";
import BagSvg from "../../assets/svg/bag.svg";
import BagDarkSvg from "../../assets/svg/bagDark.svg";
import UserDarkSvg from "../../assets/svg/userDark.svg";

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

			<ul className="ml-auto flex flex-row items-center justify-center gap-[2.5rem] mobile:mx-auto mobile:mt-[30px] mobile:justify-start mobile:gap-[50px]">
				<NavItem>
					<img className="block mobile:hidden" src={UserSvg} alt="user image" />
					<img
						className="hidden h-[26px] w-[20px] mobile:block mobile:min-h-[26px] mobile:min-w-[20px]"
						src={UserDarkSvg}
						alt="user image"
					/>
				</NavItem>
				<NavItem>
					<img className="block mobile:hidden" src={BagSvg} alt="bag image" />
					<img
						className=":w-[26px] hidden h-[28px] mobile:block mobile:min-h-[28px] mobile:min-w-[26px]"
						src={BagDarkSvg}
						alt="bag image"
					/>
				</NavItem>
			</ul>
		</motion.div>
	);
}
