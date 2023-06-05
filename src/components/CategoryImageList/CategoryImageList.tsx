import CategoryLinkSet from "./CategoryLinkSet";
import CategoryLink_1 from "./CategoryLink_1";
import LeftArrow from "../../assets/svg/LeftArrow.svg";
import RightArrow from "../../assets/svg/RightArrow.svg";
import D001 from "../../assets/images/D001.webp";
import D002 from "../../assets/images/D002.webp";
import D003 from "../../assets/images/D003.webp";
import D004 from "../../assets/images/D004.webp";
import D005 from "../../assets/images/D005.webp";
import Scrollbutton from "./Scrollbutton";

export default function () {
	const scrollButtonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const scrollElement = document.getElementById("catalogSlider");

		if (e.currentTarget.name === "backwardScroll") {
			scrollElement?.scrollBy({ behavior: "smooth", left: -300 });
		} else if (e.currentTarget.name === "forwardScroll") {
			scrollElement?.scrollBy({ behavior: "smooth", left: 300 });
		}
	};

	return (
		<div className="mx-auto mt-[50px] flex w-fit flex-row items-center gap-x-[20px] mobile-xs-1:gap-x-[9px]">
			<Scrollbutton
				onClick={scrollButtonOnClick}
				name="backwardScroll"
				imageSrc={LeftArrow}
				alt="backward scroll button"
			/>
			<div
				className="mx-auto flex w-[90.278vw] max-w-[1300px] snap-x snap-mandatory flex-row gap-x-[20px] overflow-hidden overflow-x-auto scroll-smooth scrollbar:h-2 scrollbar-track:rounded-lg scrollbar-thumb:rounded-lg scrollbar-thumb:bg-my-dark/80 hover:scrollbar-thumb:bg-my-dark/100 tablet:w-[640px] mobile-xl:w-[310px] mobile-xs-1:w-[250px] mobile-xs-1:gap-x-0"
				id="catalogSlider"
			>
				<CategoryLinkSet
					imageClass="object-[0px_-90px] tablet:object-[-50px_-90px] mobile-xs-1:object-[-75px_-90px]"
					imageSrc={D001}
					imageAlt="Category Image 1"
					categoryDescriptionTitle="FACILISIS"
					imageClass_1="object-[-55px_-45px] tablet:object-[-75px_-45px] mobile:object-[-120px_-45px]"
					imageSrc_1={D004}
					imageAlt_1="Category Image 2"
					categoryDescriptionTitle_1="TRISTIQUE"
				/>

				<CategoryLink_1
					extraClass="object-[-35px_-20px] tablet:object-[-80px_-20px] mobile-xs-1:object-[-110px_-20px]"
					imageSrc={D002}
					imageAlt="Category Image 2"
					categoryDescriptionTitle="PRAESENT"
				/>

				<CategoryLinkSet
					imageClass="object-[-20px_-110px] tablet:object-[-75px_-110px] mobile-xs-1:object-[-120px_-110px]"
					imageSrc={D003}
					imageAlt="Category Image 3"
					categoryDescriptionTitle="PELLENTESQUE"
					imageClass_1="object-[-90px_-100px] tablet:object-[-140px_-100px] mobile-xs-1:object-[-160px_-100px]"
					imageSrc_1={D005}
					imageAlt_1="Category Image 5"
					categoryDescriptionTitle_1="ADIPISCING"
				/>
			</div>

			<Scrollbutton
				onClick={scrollButtonOnClick}
				name="forwardScroll"
				imageSrc={RightArrow}
				alt="forward scroll button"
			/>
		</div>
	);
}
