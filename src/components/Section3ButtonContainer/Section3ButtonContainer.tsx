import ButtonFilter from "./ButtonFilter";
import ViewCollectionLink from "./ViewCollectionLink";

type Section3ButtonContainerProps = {
	extraClass?: string;
};

export default function (props: Section3ButtonContainerProps) {
	return (
		<div className={`${props.extraClass} flex flex-row items-center gap-x-[8px]`}>
			<ButtonFilter>All</ButtonFilter>
			<ButtonFilter>Men</ButtonFilter>
			<ButtonFilter>Women</ButtonFilter>

			<ViewCollectionLink />
		</div>
	);
}
