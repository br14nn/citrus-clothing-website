import F002 from "../../assets/images/F002.webp";
import F003 from "../../assets/images/F003.webp";
import F004 from "../../assets/images/F004.webp";
import F005 from "../../assets/images/F005.webp";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Section2Image from "../Section2Image.tsx/Section2Image";

export default function () {
	return (
		<section className="relative flex w-full flex-col p-[4.375rem] tablet:p-[1.875rem]">
			<div className="flex flex-row tablet:gap-y-[0.5rem] mobile:flex-col">
				<p className="font-roboto-condensed text-my-dark/50">&#40;Lookbooks&#41;</p>
				<h1 className="font-anton ml-[100px] text-[clamp(60px,5.556vw,80px)] leading-none text-my-dark tablet:ml-[50px] tablet:text-[clamp(28px,6.7vw,80px)] mobile:ml-0 mobile:text-[clamp(28px,5vw,50px)]">
					UNLEASH YOUR STYLE AND <br /> EMBRACE YOUR CONFIDENCE
				</h1>
			</div>

			<div className="my-auto mt-[70px] grid grid-cols-4 justify-items-center tablet:hidden">
				<Section2Image extraClass={`bg-[-80px_-60px]`} imageUrl={F002} />
				<Section2Image extraClass={`bg-[-130px_0px]`} imageUrl={F003} />
				<Section2Image extraClass={`bg-[-110px_-100px]`} imageUrl={F004} />
				<Section2Image extraClass={`bg-[-75px_-53px]`} imageUrl={F005} />
			</div>

			<ImageCarousel />
		</section>
	);
}
