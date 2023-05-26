import ViewCollectionRightArrowDark from "../../assets/svg/viewCollectionArrowDark.svg";

export default function () {
	return (
		<a
			className="font-roboto-condensed ml-auto flex h-fit flex-row items-center justify-center gap-x-[25px] text-[1.5rem] font-bold leading-none text-my-dark"
			href="#"
		>
			View Collection{" "}
			<img className="h-[22px] w-[44px]" src={ViewCollectionRightArrowDark} alt="Right Arrow Svg" />
		</a>
	);
}
