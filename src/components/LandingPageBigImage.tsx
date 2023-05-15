import BrandNameSvg from "../assets/svg/brandName.svg";
import BrandNameMobileSvg from "../assets/svg/brandNameMobile.svg";
import F001 from "../assets/images/f001.webp";

export default function () {
	return (
		<>
			<img className="mx-auto block w-fit mobile:hidden" src={BrandNameSvg} alt="CITRUS" />
			<div className="relative hidden flex-row mobile:flex">
				<img className="w-[clamp(240px,66.667vw,300px)]" src={BrandNameMobileSvg} alt="CITRUS" />
				<img
					className="absolute bottom-0 left-0 right-0 ml-auto h-auto w-[clamp(160px,44.444vw,260px)]"
					src={F001}
					alt="Model"
				/>
			</div>
		</>
	);
}
