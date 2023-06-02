import LandingPageBigImage from "../LandingPageBigImage";
import Navbar from "../Navbar/Navbar";
import ViewCollectionArrow from "../../assets/svg/viewCollectionArrow.svg";
import A001 from "../../assets/images/A001.webp";

export default function () {
	return (
		<section className="relative flex w-full flex-col gap-y-[3.5rem] bg-my-dark p-[70px] tablet:gap-y-[48px] tablet:px-[30px] tablet:py-[50px] mobile:pb-[50px] mobile:pt-[100px]">
			<Navbar />

			<LandingPageBigImage />

			<div className="font-roboto-condensed mt-auto flex flex-col gap-y-[1.5rem] tablet:mt-0">
				<p className="w-[18.75rem] text-my-white/50">
					Explore our thoughtfully designed collections that capture the latest fashion trends while
					maintaining a timeless appeal.
				</p>

				<a
					className="flex w-fit flex-row items-center gap-[25px] text-[1.5rem] font-bold text-my-white"
					href="#"
				>
					<p>View Collection</p>
					<img className="h-[22px] w-[44px]" src={ViewCollectionArrow} alt="right arrow" />
				</a>

				<p className="ml-auto block w-fit text-my-white/50 tablet:ml-0 mobile:hidden">PST. 2023</p>
			</div>

			<img
				className="absolute bottom-0 left-0 right-0 mx-auto block w-[clamp(250px,26.528vw,382px)] tablet:mx-0 tablet:ml-auto tablet:mr-[3rem] mobile:hidden"
				src={A001}
				alt="Clothing model"
			/>
		</section>
	);
}
