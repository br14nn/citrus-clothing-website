import ViewCollectionRightArrowDark from "../../assets/svg/viewCollectionArrowDark.svg";
import ViewCollectionRightArrowDarkSmall from "../../assets/svg/viewCollectionArrowDarkSmall.svg";

export default function () {
	return (
		<a
			className="font-roboto-condensed ml-auto flex h-fit flex-row items-center justify-center gap-x-[25px] text-[1.5rem] font-bold leading-none text-my-dark mobile:ml-0 mobile:gap-x-[8px] mobile:text-[1rem]"
			href="#"
		>
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
		</a>
	);
}
