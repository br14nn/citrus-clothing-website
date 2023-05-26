import ProductDescription from "./ProductDescription";
import ProductLink from "./ProductLink";

type ProductImageItemProps = {
	extraClass?: string;
	image?: string;
	name?: string;
	price?: number;
};

export default function (props: ProductImageItemProps) {
	return (
		<a
			className={`${props.extraClass} relative h-[350px] w-[310px] bg-gray-500 bg-auto bg-no-repeat`}
			style={{ backgroundImage: `url(${props.image})` }}
			href="#"
		>
			<ProductDescription name={props.name} price={props.price} />
			<ProductLink />
		</a>
	);
}
