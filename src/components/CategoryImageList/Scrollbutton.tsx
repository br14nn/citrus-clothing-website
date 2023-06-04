type ScrollButtonProps = {
	name: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	imageSrc: string;
	alt: string;
};

export default function (props: ScrollButtonProps) {
	return (
		<button
			className="hidden h-fit w-fit min-w-[16px] tablet:block"
			name={props.name}
			onClick={props.onClick}
			aria-label="scroll buttons"
		>
			<img className="h-[32px] w-[16px]" src={props.imageSrc} alt={props.alt} />
		</button>
	);
}
