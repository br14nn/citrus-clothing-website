type CategoryItem_1Props = {
	imagePosition?: string;
	imageSrc: string;
	imageAlt: string;
};

export default function (props: CategoryItem_1Props) {
	return (
		<a className="h-[720px] w-[430px]" href="#" aria-label={props.imageAlt}>
			<img
				className={`${props.imagePosition} h-full w-full object-none`}
				src={props.imageSrc}
				alt={props.imageAlt}
			/>
		</a>
	);
}
