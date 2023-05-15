import Description from "./Description";

type Section2ImageProps = {
	imageUrl: string;
	extraClass: string;
};

export default function (props: Section2ImageProps) {
	//h-[525px] w-[300px]
	return (
		<div
			className={`${props.extraClass} relative h-[525px] w-[clamp(200px,20.833vw,300px)] bg-auto`}
			style={{ backgroundImage: `url(${props.imageUrl})` }}
		>
			<Description />
		</div>
	);
}
