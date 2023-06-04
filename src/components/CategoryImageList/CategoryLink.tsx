import { motion, useAnimate } from "framer-motion";
import CategoryDescription from "./CategoryDescription";
import CategoryDesign from "./CategoryDesign";
import CategoryFilter from "./CategoryFilter";

type CategoryLinkProps = {
	imageClass?: string;
	imageSrc: string;
	imageAlt: string;
	categoryDescriptionTitle: string;
};

export default function (props: CategoryLinkProps) {
	const [scope, animate] = useAnimate();

	const showBackdropFilter = () => {
		animate(".categoryFilter", { opacity: 1 });
	};

	const hideBackdropFilter = () => {
		animate(".categoryFilter", { opacity: 0 });
	};

	return (
		<motion.a
			className="relative h-full w-full snap-start snap-always"
			href="#"
			ref={scope}
			onHoverStart={showBackdropFilter}
			onHoverEnd={hideBackdropFilter}
			aria-label={props.imageAlt}
		>
			<img
				className={`${props.imageClass} h-full w-full object-none`}
				src={props.imageSrc}
				loading="lazy"
				alt={props.imageAlt}
			/>

			<CategoryDesign />

			<CategoryDescription categoryDescriptionTitle={props.categoryDescriptionTitle} />

			<CategoryFilter categoryFilterClassName="categoryFilter" />
		</motion.a>
	);
}
