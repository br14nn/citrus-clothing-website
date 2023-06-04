import { useAnimate, motion } from "framer-motion";
import ImageItemFilter from "./ImageItemFilter";
import ImageItemDescription from "./ImageItemDescription";
import RedirectButton from "./RedirectButton";

type ImageLIstItemProps = {
	imagePos_1: string;
	imageUrl_1: string;
	ariaLabel_1: string;
	productName_1: string;
	productPrice_1: string;
	imagePos_2: string;
	imageUrl_2: string;
	ariaLabel_2: string;
	productName_2: string;
	productPrice_2: string;
};

export default function (props: ImageLIstItemProps) {
	const [scope, animate] = useAnimate();

	const showFilterOnHover = () => {
		animate(".imageItemFilter", { opacity: 1 });
	};

	const hideFilterOnLeave = () => {
		animate(".imageItemFilter", { opacity: 0 });
	};

	const showFilterOnHover_1 = () => {
		animate(".imageItemFilter_1", { opacity: 1 });
	};

	const hideFilterOnLeave_1 = () => {
		animate(".imageItemFilter_1", { opacity: 0 });
	};

	return (
		<div ref={scope} className="flex snap-start snap-always flex-col gap-y-[20px]">
			<motion.a
				className={`relative h-[350px] w-[310px] mobile-xs-1:w-[250px]`}
				onHoverStart={showFilterOnHover}
				onHoverEnd={hideFilterOnLeave}
				href="#"
			>
				<img
					className={`${props.imagePos_1} h-full w-full object-none`}
					src={props.imageUrl_1}
					loading="lazy"
					alt={props.ariaLabel_1}
					aria-label={props.ariaLabel_1}
				/>

				<ImageItemDescription
					extraClass="z-10"
					productName={props.productName_1}
					productPrice={props.productPrice_1}
				/>

				<RedirectButton extraClass="absolute bottom-0 right-0 z-10" />

				<ImageItemFilter extraClass={"imageItemFilter"} />
			</motion.a>

			<motion.a
				className={`relative h-[350px] w-[310px] mobile-xs-1:w-[250px]`}
				onHoverStart={showFilterOnHover_1}
				onHoverEnd={hideFilterOnLeave_1}
				href="#"
			>
				<img
					className={`${props.imagePos_2} h-full w-full object-none`}
					src={props.imageUrl_2}
					loading="lazy"
					alt={props.ariaLabel_2}
					aria-label={props.ariaLabel_2}
				/>

				<ImageItemDescription
					extraClass="z-10"
					productName={props.productName_2}
					productPrice={props.productPrice_2}
				/>

				<RedirectButton extraClass="absolute bottom-0 right-0" />

				<ImageItemFilter extraClass={"imageItemFilter_1"} />
			</motion.a>
		</div>
	);
}
