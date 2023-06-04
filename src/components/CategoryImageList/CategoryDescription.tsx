type CategoryDescriptionProps = {
	categoryDescriptionClassName?: string;
	categoryDescriptionTitle: string;
};

export default function (props: CategoryDescriptionProps) {
	return (
		<div
			className={`${props.categoryDescriptionClassName} font-roboto-condensed absolute -bottom-[-20px] left-[20px] z-10 flex flex-col gap-y-[8px] leading-none text-my-white`}
		>
			<p>{props.categoryDescriptionTitle}</p>
			<p>COLLECTIONS</p>
		</div>
	);
}
