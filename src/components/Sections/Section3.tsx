import CatalogImageList from "../CatalogImageList/CatalogImageList";
import Section3ButtonContainer from "../Section3ButtonContainer/Section3ButtonContainer";
import Header from "../Header/Header";

export default function () {
	return (
		<section className="p-[70px] tablet:p-[30px]">
			<Header label="CATALOG" label_1="MI EGET MAURIS PHARETRA ET ULTRICES NEQUE ORNARE" />

			<Section3ButtonContainer />

			<CatalogImageList />
		</section>
	);
}
