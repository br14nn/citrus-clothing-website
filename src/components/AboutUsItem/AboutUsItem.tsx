type AboutUsItemPropos = {
	aboutUsItemTitle: string;
	children: React.ReactNode;
};

export default function (props: AboutUsItemPropos) {
	return (
		<div className="flex flex-col justify-start gap-[16px] text-[24px] leading-none mobile:items-center">
			<p>{props.aboutUsItemTitle}</p>
			<div className="flex flex-col gap-[8px] text-[16px] text-my-white mobile:items-center">
				{props.children}
			</div>
		</div>
	);
}
