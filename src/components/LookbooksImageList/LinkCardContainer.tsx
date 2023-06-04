import LinkCardImage from "./LinkCardImage";

type ImageLinkProps = {
	imagePosition: string;
	imageUrl: string;
	title: string;
	title_1: string;
};

export default function (props: ImageLinkProps) {
	return (
		<div className="relative h-[525px] min-w-[310px] max-w-[310px] snap-start snap-always bg-gray-400 mobile-xs-1:min-w-[250px] mobile-xs-1:max-w-[250px]">
			<LinkCardImage
				imagePosition={props.imagePosition}
				imageUrl={props.imageUrl}
				title={props.title}
				title_1={props.title_1}
			/>
		</div>
	);
}
