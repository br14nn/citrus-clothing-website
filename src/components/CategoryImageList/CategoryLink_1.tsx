import { motion, useAnimate } from "framer-motion";
import CategoryDescription from "./CategoryDescription";
import CategoryDesign from "./CategoryDesign";
import CategoryFilter from "./CategoryFilter";

type CategoryItem_1Props = {
	extraClass: string;
	imageSrc: string;
	imageAlt: string;
	categoryDescriptionTitle: string;
};

export default function (props: CategoryItem_1Props) {
	const [scope, animate] = useAnimate();

	const showBackdropFilter = () => {
		animate(".categoryFilter", { opacity: 1 });
	};

	const hideBackdropFilter = () => {
		animate(".categoryFilter", { opacity: 0 });
	};

	return (
		<motion.a
			className="relative h-[720px] w-[430px] min-w-[430px] max-w-[430px] snap-start snap-always tablet:min-w-[310px] tablet:max-w-[310px] mobile-xs-1:min-w-[250px] mobile-xs-1:max-w-[250px]"
			href="#"
			ref={scope}
			onHoverStart={showBackdropFilter}
			onHoverEnd={hideBackdropFilter}
			aria-label={props.imageAlt}
		>
			<img
				className={`${props.extraClass} h-full w-full object-none`}
				src={props.imageSrc}
				alt={props.imageAlt}
			/>

			<CategoryDescription categoryDescriptionTitle={props.categoryDescriptionTitle} />

			<CategoryDesign />

			<CategoryFilter categoryFilterClassName="categoryFilter" />
		</motion.a>
	);
}
