type CategoryItemProps = {
	imageSrc: string;
	imageAlt: string;
	imageSrc_1: string;
	imageAlt_1: string;
};

export default function (props: CategoryItemProps) {
	return (
		<div className="flex flex-col gap-y-[20px]">
			<a className="h-[350px] w-[415px]" href="#" aria-label={props.imageAlt}>
				<img
					className="h-full w-full object-none"
					src={props.imageSrc}
					loading="lazy"
					alt={props.imageAlt}
				/>
			</a>
			<a className="h-[350px] w-[415px]" href="#" aria-label={props.imageAlt_1}>
				<img
					className="h-full w-full object-none"
					src={props.imageSrc_1}
					loading="lazy"
					alt={props.imageAlt_1}
				/>
			</a>
		</div>
	);
}
