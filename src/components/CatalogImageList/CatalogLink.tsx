import { motion, useAnimate } from "framer-motion";
import ImageItemDescription from "./ImageItemDescription";
import ImageItemFilter from "./ImageItemFilter";
import CatalogDesign from "./CatalogDesign";

type CatalogLinkProps = {
	catalogImagePosition: string;
	catalogImageUrl: string;
	catalogAlt: string;
	productName: string;
	productPrice: string;
};

export default function (props: CatalogLinkProps) {
	const [scope, animate] = useAnimate();

	const showBackdropFilter = () => {
		animate(".catalogFilter", { opacity: 1 });
	};

	const hideBackdropFilter = () => {
		animate(".catalogFilter", { opacity: 0 });
	};

	return (
		<motion.a
			className={`relative h-[350px] w-[310px] mobile-xs-1:w-[250px]`}
			ref={scope}
			onHoverStart={showBackdropFilter}
			onHoverEnd={hideBackdropFilter}
			href="#"
			aria-label={props.catalogAlt}
		>
			<img
				className={`${props.catalogImagePosition} h-full w-full object-none`}
				src={props.catalogImageUrl}
				loading="lazy"
				alt={props.catalogAlt}
			/>

			<ImageItemDescription
				extraClass="z-10"
				productName={props.productName}
				productPrice={props.productPrice}
			/>

			<CatalogDesign />

			<ImageItemFilter extraClass={"catalogFilter"} />
		</motion.a>
	);
}
