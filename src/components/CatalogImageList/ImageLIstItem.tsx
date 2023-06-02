import { useAnimate, motion } from "framer-motion";
import ImageItemFilter from "./ImageItemFilter";
import ImageItemDescription from "./ImageItemDescription";

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
		<div ref={scope} className="flex snap-start snap-always flex-col gap-[20px]">
			<motion.a
				className={`${props.imagePos_1} relative h-[350px] w-[310px] bg-gray-400 bg-auto bg-no-repeat mobile-xs-1:w-[250px]`}
				onHoverStart={showFilterOnHover}
				onHoverEnd={hideFilterOnLeave}
				style={{ backgroundImage: `url(${props.imageUrl_1})` }}
				href="#"
				aria-label={props.ariaLabel_1}
			>
				<ImageItemDescription
					productName={props.productName_1}
					productPrice={props.productPrice_1}
				/>

				<ImageItemFilter extraClass={"imageItemFilter"} />
			</motion.a>

			<motion.a
				className={`${props.imagePos_2} relative h-[350px] w-[310px] bg-gray-400 bg-auto bg-no-repeat mobile-xs-1:w-[250px]`}
				onHoverStart={showFilterOnHover_1}
				onHoverEnd={hideFilterOnLeave_1}
				style={{ backgroundImage: `url(${props.imageUrl_2})` }}
				href="#"
				aria-label={props.ariaLabel_2}
			>
				<ImageItemDescription
					productName={props.productName_2}
					productPrice={props.productPrice_2}
				/>

				<ImageItemFilter extraClass={"imageItemFilter_1"} />
			</motion.a>
		</div>
	);
}
