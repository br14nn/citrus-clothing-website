type ProductDescriptionProps = {
	name?: string;
	price?: number;
};

export default function (props: ProductDescriptionProps) {
	return (
		<div className="font-roboto-condensed absolute bottom-0 left-0 mb-[20px] ml-[20px] mt-auto h-fit font-medium leading-none text-my-white">
			<p>{props.name}</p>
			<p className="mt-[8px]">$ {props.price}</p>
		</div>
	);
}
