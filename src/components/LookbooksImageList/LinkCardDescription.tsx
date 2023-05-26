type LinkCardDescriptionProps = {
	title1: string;
	title2: string;
};

export default function (props: LinkCardDescriptionProps) {
	return (
		<div className="font-roboto-condensed absolute bottom-[20px] left-[20px] font-medium leading-none text-my-white">
			<p>{props.title1}</p>
			<p>{props.title2}</p>
		</div>
	);
}
