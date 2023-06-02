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
			console.log("Should scroll forward");
			scrollElement?.scrollBy({ behavior: "smooth", left: 1 });
		} else {
			console.log("Should scroll backward");
			scrollElement?.scrollBy({ behavior: "smooth", left: -1 });
		}
	};

	return (
		<div className="relative mx-auto mt-[1rem] flex w-fit flex-row items-center gap-[20px] mobile:gap-[9px]">
			<Scrollbutton
				name="backwardScroll"
				onClick={scrollButtonOnClick}
				imageSrc={LeftArrow}
				alt="Left Arrow"
			/>

			<div
				className="flex snap-x snap-mandatory flex-row gap-[20px] overflow-hidden overflow-x-auto scroll-smooth scrollbar:h-2 scrollbar-track:rounded-lg scrollbar-thumb:rounded-lg scrollbar-thumb:bg-my-dark/80 hover:scrollbar-thumb:bg-my-dark/100 desktop:w-[90.278vw] desktop:max-w-[1300px] tablet:w-[640px] mobile-xl:w-[310px] mobile-xl:gap-0 mobile-xs-1:min-w-[250px] mobile-xs-1:max-w-[250px]"
				id="sliderCatalog"
			>
				<ImageLIstItem
					imagePos_1="bg-[-70px_-65px]"
					imageUrl_1={C001}
					ariaLabel_1="Product Display #01"
					productName_1="FACILISIS LEO"
					productPrice_1="$ 19.99"
					imagePos_2="bg-[0px_0px] mobile-xs-1:bg-[-35px_0px]"
					imageUrl_2={C005}
					ariaLabel_2="Product Display #05"
					productName_2="FACILISIS LEO"
					productPrice_2="$ 19.99"
				/>
				<ImageLIstItem
					imagePos_1="bg-[0px_-100px] mobile-xs-1:bg-[-30px_-100px]"
					imageUrl_1={C002}
					ariaLabel_1="Product Display #02"
					productName_1="TURPIS EGESTAS"
					productPrice_1="$ 24.99"
					imagePos_2="bg-[0px_0px] mobile-xs-1:bg-[-30px_0px]"
					imageUrl_2={C006}
					ariaLabel_2="Product Display #06"
					productName_2="TURPIS EGESTAS"
					productPrice_2="$ 24.99"
				/>
				<ImageLIstItem
					imagePos_1="bg-[0px_0px] mobile-xs-1:bg-[-35px_0px]"
					imageUrl_1={C003}
					ariaLabel_1="Product Display #03"
					productName_1="ET MAGNIS"
					productPrice_1="$ 15.99"
					imagePos_2="bg-[0px_0px]"
					imageUrl_2={C007}
					ariaLabel_2="Product Display #07"
					productName_2="ET MAGNIS"
					productPrice_2="$ 15.99"
				/>
				<ImageLIstItem
					imagePos_1="bg-[-50px_0px]"
					imageUrl_1={C004}
					ariaLabel_1="Product Display #04"
					productName_1="LACUS VEL"
					productPrice_1="$ 34.99"
					imagePos_2="bg-[-60px_-40px]"
					imageUrl_2={C008}
					ariaLabel_2="Product Display #08"
					productName_2="LACUS VEL"
					productPrice_2="$ 34.99"
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
