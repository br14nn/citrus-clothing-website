import Header from "../Header/Header";
import LookbooksImageList from "../LookbooksImageList/LookbooksImageList";

export default function () {
	return (
		<section className="relative flex w-full flex-col p-[70px] tablet:p-[30px]">
			<Header label="LOOKBOOKS" label_1="MI EGET MAURIS PHARETRA ET ULTRICES NEQUE ORNARE" />

			<LookbooksImageList />
		</section>
	);
}
