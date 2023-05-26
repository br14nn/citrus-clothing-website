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
		<div className="relative h-[525px] min-w-[300px] max-w-[300px] snap-start bg-gray-400">
			<LinkCardImage imagePosition={props.imagePosition} imageUrl={props.imageUrl} />
			<LinkCardDescription title1={props.title1} title2={props.title2} />
		</div>
	);
}
