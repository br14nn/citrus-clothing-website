import ProductImageItem from "./ProductImageItem";
import C001 from "../../assets/images/C001.webp";
import C002 from "../../assets/images/C002.webp";
import C003 from "../../assets/images/C003.webp";
import C004 from "../../assets/images/C004.webp";
import C005 from "../../assets/images/C005.webp";
import C006 from "../../assets/images/C006.webp";
import C007 from "../../assets/images/C007.webp";
import C008 from "../../assets/images/C008.webp";

export default function () {
	return (
		<div className="mx-auto mt-[1rem] flex max-w-[1300px] flex-col gap-[20px] overflow-hidden overflow-x-auto">
			<div className="flex w-[1300px] flex-row gap-[20px]" id="firstRow">
				<ProductImageItem
					extraClass={`bg-[-43px_-93px]`}
					image={C001}
					name="FACILISIS LEO"
					price={19.99}
				/>
				<ProductImageItem
					extraClass={`bg-[0px_-100px]`}
					image={C002}
					name="TURPIS EGESTAS"
					price={24.99}
				/>
				<ProductImageItem
					extraClass={`bg-[0px_-8px]`}
					image={C003}
					name="ET MAGNUS"
					price={15.99}
				/>
				<ProductImageItem
					extraClass={`bg-[-40px_-35px]`}
					image={C004}
					name="LACUS VEL"
					price={34.99}
				/>
			</div>

			<div className="flex w-[1300px] flex-row gap-[20px]" id="secondRow">
				<ProductImageItem
					extraClass={`bg-[-20px_0px]`}
					image={C005}
					name="FACILISIS LEO"
					price={19.99}
				/>
				<ProductImageItem
					extraClass={`bg-[-20px_-20px]`}
					image={C006}
					name="TURPIS EGESTAS"
					price={24.99}
				/>
				<ProductImageItem
					extraClass={`bg-[-20px_-25px]`}
					image={C007}
					name="ET MAGNUS"
					price={15.99}
				/>
				<ProductImageItem
					extraClass={`bg-[-20px_-65px]`}
					image={C008}
					name="LACUS VEL"
					price={34.99}
				/>
			</div>
		</div>
	);
}
