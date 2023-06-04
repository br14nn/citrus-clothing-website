import { useAnimate, motion } from "framer-motion";
import LinkCardFilter from "./LinkCardFilter";
import LinkCardDescription from "./LinkCardDescription";

type LinkCardImageProps = {
	imagePosition: string;
	imageUrl: string;
	title: string;
	title_1: string;
};

export default function (props: LinkCardImageProps) {
	const [scope, animate] = useAnimate();

	const showLinkCardFilter = () => {
		animate(".linkCardFilter", { opacity: 1 });
	};

	const hideLinkCardFilter = () => {
		animate(".linkCardFilter", { opacity: 0 });
	};

	return (
		<motion.a
			href="#"
			onHoverStart={showLinkCardFilter}
			onHoverEnd={hideLinkCardFilter}
			ref={scope}
		>
			<img
				className={`${props.imagePosition} h-full w-full object-none`}
				loading="lazy"
				src={props.imageUrl}
				alt="Lookbooks image"
			/>

			<LinkCardDescription extraClass="z-10" title={props.title} title_1={props.title_1} />

			<LinkCardFilter />
		</motion.a>
	);
}
