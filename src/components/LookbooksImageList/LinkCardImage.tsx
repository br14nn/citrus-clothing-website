import { useAnimate } from "framer-motion";

import LinkCardFilter from "./LinkCardFilter";

type LinkCardImageProps = {
	imagePosition: string;
	imageUrl: string;
};

export default function (props: LinkCardImageProps) {
	const [scope, animate] = useAnimate();

	const showLinkCardFilter = () => {
		animate("#linkCardFilter", { opacity: 1 });
	};

	const hideLinkCardFilter = () => {
		animate("#linkCardFilter", { opacity: 0 });
	};

	return (
		<a
			className={`${props.imagePosition}  block h-full w-full bg-auto bg-no-repeat`}
			style={{ backgroundImage: `url(${props.imageUrl})` }}
			href="#"
			onMouseEnter={showLinkCardFilter}
			onMouseLeave={hideLinkCardFilter}
			ref={scope}
		>
			<LinkCardFilter />
		</a>
	);
}
