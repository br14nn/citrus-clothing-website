import ImageLIstItem from "./ImageLIstItem";
import C001 from "../../assets/images/C001.webp";
import C002 from "../../assets/images/C002.webp";
import C003 from "../../assets/images/C003.webp";
import C004 from "../../assets/images/C004.webp";
import C005 from "../../assets/images/C005.webp";
import C006 from "../../assets/images/C006.webp";
import C007 from "../../assets/images/C007.webp";
import C008 from "../../assets/images/C008.webp";
import RightArrow from "../../assets/svg/RightArrow.svg";
import LeftArrow from "../../assets/svg/LeftArrow.svg";
import Scrollbutton from "./Scrollbutton";

export default function () {
	const scrollButtonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const scrollElement = document.getElementById("sliderCatalog");

		if (e.currentTarget.name === "forwardScroll") {
			scrollElement?.scrollBy({ behavior: "smooth", left: 300 });
		} else if (e.currentTarget.name === "backwardScroll") {
			scrollElement?.scrollBy({ behavior: "smooth", left: -300 });
		}
	};

	return (
		<div className="relative mx-auto mt-[1rem] flex w-full flex-row items-center gap-[20px] tablet:w-fit mobile:mt-[8px] mobile:gap-[9px]">
			<Scrollbutton
				name="backwardScroll"
				onClick={scrollButtonOnClick}
				imageSrc={LeftArrow}
				alt="Left Arrow"
			/>

			<div
				className="mx-auto flex snap-x snap-mandatory flex-row gap-[20px] overflow-hidden overflow-x-auto scroll-smooth scrollbar:h-2 scrollbar-track:rounded-lg scrollbar-thumb:rounded-lg scrollbar-thumb:bg-my-dark/80 hover:scrollbar-thumb:bg-my-dark/100 desktop:w-[90.278vw] desktop:max-w-[1300px] tablet:w-[640px] mobile-xl:w-[310px] mobile-xl:gap-0 mobile-xs-1:min-w-[250px] mobile-xs-1:max-w-[250px]"
				id="sliderCatalog"
			>
				<ImageLIstItem
					catalogImagePosition="object-[-70px_-65px]"
					catalogImageUrl={C001}
					catalogAlt="Product Display #01"
					productName="FACILISIS LEO"
					productPrice="$ 19.99"
					catalogImagePosition_1="object-[0px_0px] mobile-xs-1:object-[-35px_0px]"
					catalogImageUrl_1={C005}
					catalogAlt_1="Product Display #05"
					productName_1="FACILISIS LEO"
					productPrice_1="$ 19.99"
				/>
				<ImageLIstItem
					catalogImagePosition="object-[0px_-100px] mobile-xs-1:object-[-30px_-100px]"
					catalogImageUrl={C002}
					catalogAlt="Product Display #02"
					productName="TURPIS EGESTAS"
					productPrice="$ 24.99"
					catalogImagePosition_1="object-[0px_0px] mobile-xs-1:object-[-30px_0px]"
					catalogImageUrl_1={C006}
					catalogAlt_1="Product Display #06"
					productName_1="TURPIS EGESTAS"
					productPrice_1="$ 24.99"
				/>
				<ImageLIstItem
					catalogImagePosition="object-[0px_0px] mobile-xs-1:object-[-35px_0px]"
					catalogImageUrl={C003}
					catalogAlt="Product Display #03"
					productName="ET MAGNIS"
					productPrice="$ 15.99"
					catalogImagePosition_1="object-[0px_0px]"
					catalogImageUrl_1={C007}
					catalogAlt_1="Product Display #07"
					productName_1="ET MAGNIS"
					productPrice_1="$ 15.99"
				/>
				<ImageLIstItem
					catalogImagePosition="object-[-50px_0px]"
					catalogImageUrl={C004}
					catalogAlt="Product Display #04"
					productName="LACUS VEL"
					productPrice="$ 34.99"
					catalogImagePosition_1="object-[-60px_-40px]"
					catalogImageUrl_1={C008}
					catalogAlt_1="Product Display #08"
					productName_1="LACUS VEL"
					productPrice_1="$ 34.99"
				/>
			</div>

			<Scrollbutton
				name="forwardScroll"
				onClick={scrollButtonOnClick}
				imageSrc={RightArrow}
				alt="Right arrow"
			/>
		</div>
	);
}
