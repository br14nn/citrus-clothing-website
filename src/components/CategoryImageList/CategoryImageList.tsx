import CategoryItem from "./CategoryItem";
import CategoryItem_1 from "./CategoryItem_1";
import D001 from "../../assets/images/D001.webp";
import D002 from "../../assets/images/D002.webp";
import D003 from "../../assets/images/D003.webp";
import D004 from "../../assets/images/D004.webp";
import D005 from "../../assets/images/D005.webp";

export default function () {
	return (
		<div className="mx-auto mt-[50px] flex w-[1300px] flex-row gap-x-[20px]">
			<CategoryItem
				imageSrc={D001}
				imageAlt="Category Image 1"
				imageSrc_1={D004}
				imageAlt_1="Category Image 2"
			/>
			<CategoryItem_1
				imagePosition="object-[-35px_-20px]"
				imageSrc={D002}
				imageAlt="Category Image 2"
			/>
			<CategoryItem
				imageSrc={D003}
				imageAlt="Category Image 3"
				imageSrc_1={D005}
				imageAlt_1="Category Image 5"
			/>
		</div>
	);
}
