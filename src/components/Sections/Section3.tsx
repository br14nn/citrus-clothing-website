import CatalogImageList from "../CatalogImageList/CatalogImageList";
import Section3ButtonContainer from "../Section3ButtonContainer/Section3ButtonContainer";

export default function () {
	return (
		<section className="p-[70px] tablet:p-[30px]">
			<header className="flex flex-row mobile:flex-col mobile:gap-y-[8px]">
				<p className="font-roboto-condensed text-my-dark/50">&#40;CATALOG&#41;</p>
				<h1 className="font-anton ml-[100px] min-w-[300px] text-[clamp(60px,5.556vw,80px)] leading-none text-my-dark tablet:ml-[50px] tablet:text-[clamp(28px,6.7vw,80px)] mobile:ml-0 mobile:text-[clamp(28px,5vw,50px)]">
					MI EGET MAURIS PHARETRA <br />
					ET ULTRICES NEQUE ORNARE
				</h1>
			</header>

			<Section3ButtonContainer />

			<CatalogImageList />
		</section>
	);
}
