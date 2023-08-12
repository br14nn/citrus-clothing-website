import B001 from "../../assets/images/B001.webp";
import B002 from "../../assets/images/B002.webp";
import B003 from "../../assets/images/B003.webp";
import B004 from "../../assets/images/B004.webp";
import RightArrow from "../../assets/svg/RightArrow.svg";
import LeftArrow from "../../assets/svg/LeftArrow.svg";
import LinkCardContainer from "./LinkCardContainer";
import ScrollButton from "./ScrollButton";

export default function () {
	const scrollButtonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const scrollElement = document.getElementById("sliderLookbook");

		if (e.currentTarget.name === "forwardScroll") {
			scrollElement?.scrollBy({ behavior: "smooth", left: 300 });
		} else if (e.currentTarget.name === "backwardScroll") {
			scrollElement?.scrollBy({ behavior: "smooth", left: -300 });
		}
	};

	return (
		<div className="relative mx-auto mt-[50px] flex h-fit w-full flex-row items-center gap-[20px] tablet:w-fit mobile:mt-[32px] mobile:gap-[9px]">
			<ScrollButton name="backwardScroll" onClick={scrollButtonOnClick} imgSrc={LeftArrow} />

			<div
				className="mx-auto flex w-[90.278vw] max-w-[1300px] snap-x snap-mandatory gap-x-[20px] overflow-hidden overflow-x-auto scroll-smooth text-green-200 scrollbar:h-2 scrollbar-track:rounded-lg scrollbar-thumb:rounded-lg scrollbar-thumb:bg-my-dark/80 hover:scrollbar-thumb:bg-my-dark/100 tablet:w-[640px] tablet:gap-x-[20px] mobile-xl:w-[310px] mobile-xl:gap-x-[0px] mobile-xs-1:min-w-[250px] mobile-xs-1:max-w-[250px]"
				id="sliderLookbook"
			>
				<LinkCardContainer
					imagePosition="object-[-30px_-80px]"
					imageUrl={B001}
					title="ALIQUAM NULLA"
					title_1="EGET ALIQUET 2023"
				/>
				<LinkCardContainer
					imagePosition="object-[-100px_0px]"
					imageUrl={B002}
					title="EGET ALIQUET"
					title_1="FACILISI CRAS 2023"
				/>
				<LinkCardContainer
					imagePosition="object-[-110px_-100px]"
					imageUrl={B003}
					title="MASSA TEMPOR"
					title_1="ALIQUAM NULLA 2023"
				/>
				<LinkCardContainer
					imagePosition="object-[-70px_-40px]"
					imageUrl={B004}
					title="FACILISI CRAS"
					title_1="MASSA TEMPOR 2023"
				/>
			</div>

			<ScrollButton name="forwardScroll" onClick={scrollButtonOnClick} imgSrc={RightArrow} />
		</div>
	);
}
