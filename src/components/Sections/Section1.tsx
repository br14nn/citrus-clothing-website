import LandingPageBigImage from "../LandingPageBigImage";
import ViewCollectionLinkLight from "../ViewCollectionLinkLight.tsx/ViewCollectionLinkLight";
import A001 from "../../assets/images/A001.webp";

export default function () {
	return (
		<section
			id="home"
			className="relative flex w-full flex-col gap-y-[3.5rem] bg-my-dark p-[70px] tablet:gap-y-[48px] tablet:px-[30px] tablet:py-[50px]"
		>
			<LandingPageBigImage />

			<div className="font-roboto-condensed mt-auto flex flex-col gap-y-[1.5rem] tablet:mt-0">
				<p className="w-[18.75rem] text-my-white/50">
					Explore our thoughtfully designed collections that capture the latest fashion trends while
					maintaining a timeless appeal.
				</p>

				<ViewCollectionLinkLight />

				<p className="ml-auto block w-fit text-my-white/50 tablet:ml-0 mobile:hidden">PST. 2023</p>
			</div>

			<img
				className="absolute bottom-0 left-0 right-0 mx-auto block w-[clamp(250px,26.528vw,382px)] tablet:mx-0 tablet:ml-auto tablet:mr-[3rem] mobile:hidden"
				loading="lazy"
				src={A001}
				alt="Clothing model"
			/>
		</section>
	);
}
