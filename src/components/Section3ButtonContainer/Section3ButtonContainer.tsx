import ButtonFilter from "./ButtonFilter";
import ViewCollectionLink from "./ViewCollectionLink";

type Section3ButtonContainerProps = {
	extraClass?: string;
};

export default function (props: Section3ButtonContainerProps) {
	return (
		<div
			className={`${props.extraClass} mx-auto mt-[50px] flex max-w-[1300px] flex-row items-center gap-[8px] mobile:mt-[32px] mobile:flex-col mobile:items-center mobile-xs-1:items-start`}
		>
			<div className="flex flex-row items-center gap-[8px]">
				<ButtonFilter>All</ButtonFilter>
				<ButtonFilter>Man</ButtonFilter>
				<ButtonFilter>Woman</ButtonFilter>
			</div>

			<ViewCollectionLink />
		</div>
	);
}
