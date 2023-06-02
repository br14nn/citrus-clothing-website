import LinkCardDescription from "./LinkCardDescription";

import LinkCardImage from "./LinkCardImage";

type ImageLinkProps = {
	imagePosition: string;
	imageUrl: string;
	title1: string;
	title2: string;
};

export default function (props: ImageLinkProps) {
	return (
		<div className="relative h-[525px] min-w-[310px] max-w-[310px] snap-start snap-always bg-gray-400 mobile-xs-1:min-w-[250px] mobile-xs-1:max-w-[250px]">
			<LinkCardImage imagePosition={props.imagePosition} imageUrl={props.imageUrl} />
			<LinkCardDescription title1={props.title1} title2={props.title2} />
		</div>
	);
}
