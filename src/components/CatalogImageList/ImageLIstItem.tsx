type ImageLIstItemProps = {
	imagePos_1: string;
	imageUrl_1: string;
	ariaLabel_1: string;
	imagePos_2: string;
	imageUrl_2: string;
	ariaLabel_2: string;
};

export default function (props: ImageLIstItemProps) {
	return (
		<div className="flex snap-start snap-always flex-col gap-[20px]">
			<a
				className={`${props.imagePos_1} h-[350px] w-[310px] bg-gray-400 bg-auto bg-no-repeat mobile-xs-1:w-[250px]`}
				style={{ backgroundImage: `url(${props.imageUrl_1})` }}
				href="#"
				aria-label={props.ariaLabel_1}
			></a>
			<a
				className={`${props.imagePos_2} h-[350px] w-[310px] bg-gray-400 bg-auto bg-no-repeat mobile-xs-1:w-[250px]`}
				style={{ backgroundImage: `url(${props.imageUrl_2})` }}
				href="#"
				aria-label={props.ariaLabel_2}
			></a>
		</div>
	);
}
