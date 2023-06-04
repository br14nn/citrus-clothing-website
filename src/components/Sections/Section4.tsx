import Header from "../Header/Header";
import CategoryImageList from "../CategoryImageList/CategoryImageList";

export default function () {
	return (
		<section className="p-[70px] tablet:p-[30px]">
			<Header label="CATEGORY" label_1="NISI VITAE SUSCIPIT TELLUS MAURIS A DIAM MAECENAS" />

			<CategoryImageList />
		</section>
	);
}
