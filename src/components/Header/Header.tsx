type HeaderProps = {
	label: string;
	label_1: string;
};

export default function (props: HeaderProps) {
	return (
		<header className="flex flex-row gap-x-[100px] tablet:gap-x-[40px] tablet:gap-y-[8px] mobile:flex-col mobile:gap-x-0">
			<p className="font-roboto-condensed text-my-dark/50">&#40;{props.label}&#41;</p>
			<h1 className="font-anton w-[55.556vw] min-w-[280px] max-w-[800px] text-[clamp(28px,5.556vw,80px)] leading-none text-my-dark">
				{props.label_1}
			</h1>
		</header>
	);
}
