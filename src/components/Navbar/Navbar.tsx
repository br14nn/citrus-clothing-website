import NavItem from "./NavItem";
import UserSvg from "../../assets/svg/user.svg";
import BagSvg from "../../assets/svg/bag.svg";
import MenuSvg from "../../assets/svg/menu.svg";

export default function () {
	return (
		<nav className="text-my-white/50">
			<div className="hidden flex-row mobile:flex">
				<div className="font-dosis flex flex-row items-center gap-x-[0.25rem] leading-none">
					<p className="font-bold text-my-green/70">CITRUS</p>
					<p>|</p>
					<p>PST. 2023</p>
				</div>
				<button className="ml-auto ">
					<img src={MenuSvg} alt="Menu.svg" />
				</button>
			</div>

			<div className="flex flex-row items-center mobile:hidden">
				<ul className="font-dosis flex flex-row items-center justify-center gap-[5rem] tablet:gap-[3rem] ">
					<NavItem>HOME</NavItem>
					<NavItem>SHOP</NavItem>
					<NavItem>PRODUCTS</NavItem>
					<NavItem>ABOUT US</NavItem>
				</ul>

				<ul className="ml-auto flex flex-row items-center justify-center gap-[2.5rem]">
					<NavItem>
						<img src={UserSvg} alt="user.svg" />
					</NavItem>
					<NavItem>
						<img src={BagSvg} alt="bag.svg" />
					</NavItem>
				</ul>
			</div>
		</nav>
	);
}
