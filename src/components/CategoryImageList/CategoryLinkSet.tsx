import CategoryLink from "./CategoryLink";

type CategoryItemProps = {
	imageClass?: string;
	imageSrc: string;
	imageAlt: string;
	categoryDescriptionTitle: string;
	imageClass_1?: string;
	imageSrc_1: string;
	imageAlt_1: string;
	categoryDescriptionTitle_1: string;
};

export default function (props: CategoryItemProps) {
	return (
		<div className="flex h-[350px] w-[415px] min-w-[415px] max-w-[415px] flex-col gap-y-[20px] tablet:min-w-[310px] tablet:max-w-[310px] mobile-xs-1:min-w-[250px] mobile-xs-1:max-w-[250px]">
			<CategoryLink
				imageClass={props.imageClass}
				imageSrc={props.imageSrc}
				imageAlt={props.imageAlt}
				categoryDescriptionTitle={props.categoryDescriptionTitle}
			/>
			<CategoryLink
				imageClass={props.imageClass_1}
				imageSrc={props.imageSrc_1}
				imageAlt={props.imageAlt_1}
				categoryDescriptionTitle={props.categoryDescriptionTitle_1}
			/>
		</div>
	);
}
