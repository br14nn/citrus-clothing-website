import ButtonFilter from "./ButtonFilter";
import ViewCollectionLink from "./ViewCollectionLink";

type Section3ButtonContainerProps = {
	extraClass?: string;
};

export default function (props: Section3ButtonContainerProps) {
	return (
		<div
			className={`${props.extraClass} mx-auto mt-[50px] flex max-w-[1300px] flex-row items-center gap-[8px] mobile:mt-[20px] mobile:flex-col mobile:items-start`}
		>
			<div className="flex flex-row items-center gap-[8px]">
				<ButtonFilter>All</ButtonFilter>
				<ButtonFilter>Men</ButtonFilter>
				<ButtonFilter>Women</ButtonFilter>
			</div>

			<ViewCollectionLink />
		</div>
	);
}
