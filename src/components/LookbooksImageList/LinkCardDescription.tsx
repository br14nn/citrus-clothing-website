type LinkCardDescriptionProps = {
	extraClass?: string;
	title: string;
	title_1: string;
};

export default function (props: LinkCardDescriptionProps) {
	return (
		<div
			className={`${props.extraClass} font-roboto-condensed absolute bottom-[20px] left-[20px] flex flex-col gap-[2px] font-medium leading-none text-my-white`}
		>
			<p>{props.title}</p>
			<p>{props.title_1}</p>
		</div>
	);
}
