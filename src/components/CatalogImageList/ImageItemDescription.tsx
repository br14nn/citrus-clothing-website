type DescriptionProps = {
	extraClass?: string;
	productName: string;
	productPrice: string;
};

export default function (props: DescriptionProps) {
	return (
		<div
			className={`${props.extraClass} font-roboto-condensed absolute bottom-[20px] left-[20px] z-10 flex flex-col gap-[2px] font-medium leading-none text-white`}
		>
			<p>{props.productName}</p>
			<p>{props.productPrice}</p>
		</div>
	);
}
