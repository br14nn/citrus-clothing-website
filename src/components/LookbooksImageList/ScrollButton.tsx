type ScrollButtonProps = {
	extraClass: string;
	name: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	imgSrc: string;
};

export default function (props: ScrollButtonProps) {
	return (
		<button
			className={`${props.extraClass} absolute bottom-0 top-0 z-10 my-auto h-[50px] w-[40px]`}
			name={props.name}
			aria-label={props.name}
			onClick={props.onClick}
		>
			<img className="mx-auto h-[38px] w-[22px]" src={props.imgSrc} alt="arrow" />
		</button>
	);
}
