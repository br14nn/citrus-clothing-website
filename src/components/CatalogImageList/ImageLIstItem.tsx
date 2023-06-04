import CatalogLink from "./CatalogLink";

type ImageLIstItemProps = {
	catalogImagePosition: string;
	catalogImageUrl: string;
	catalogAlt: string;
	productName: string;
	productPrice: string;
	catalogImagePosition_1: string;
	catalogImageUrl_1: string;
	catalogAlt_1: string;
	productName_1: string;
	productPrice_1: string;
};

export default function (props: ImageLIstItemProps) {
	return (
		<div className="flex snap-start snap-always flex-col gap-y-[20px]">
			<CatalogLink
				catalogImagePosition={props.catalogImagePosition}
				catalogImageUrl={props.catalogImageUrl}
				catalogAlt={props.catalogAlt}
				productName={props.productName}
				productPrice={props.productPrice}
			/>

			<CatalogLink
				catalogImagePosition={props.catalogImagePosition_1}
				catalogImageUrl={props.catalogImageUrl_1}
				catalogAlt={props.catalogAlt_1}
				productName={props.productName_1}
				productPrice={props.productPrice_1}
			/>
		</div>
	);
}
