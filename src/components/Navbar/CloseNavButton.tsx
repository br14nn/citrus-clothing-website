import XSvg from "../../assets/svg/xIcon.svg";

type CloseNavButtonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function (props: CloseNavButtonProps) {
	return (
		<button className={`hidden w-fit mobile:ml-auto mobile:block`} onClick={props.onClick}>
			<img
				className="h-[26px] w-[26px] mobile:min-h-[26px] mobile:min-w-[26px]"
				src={XSvg}
				alt="X image"
			/>
		</button>
	);
}
