type DescriptionProps = {
	productName: string;
	productPrice: string;
};

export default function (props: DescriptionProps) {
	return (
		<div className="font-roboto-condensed absolute bottom-[20px] left-[20px] flex flex-col gap-[2px] font-medium leading-none text-white">
			<p>{props.productName}</p>
			<p>{props.productPrice}</p>
		</div>
	);
}
