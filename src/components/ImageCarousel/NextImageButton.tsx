type NextImageButtonProps = {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	src: string;
	extraClass: string;
};

export default function (props: NextImageButtonProps) {
	return (
		<button onClick={props.onClick}>
			<img
				className={`${props.extraClass} absolute inset-0 my-auto`}
				src={props.src}
				alt="arrow icon"
			/>
		</button>
	);
}
