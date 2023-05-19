import MenuSvg from "../../assets/svg/menu.svg";

type OpenNavButtonType = {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function (props: OpenNavButtonType) {
	return (
		<button onClick={props.onClick} className="hidden mobile:ml-0 mobile:block">
			<img className={`h-[17px] min-h-[17px] w-[30px] min-w-[30px]`} src={MenuSvg} alt="Menu.svg" />
		</button>
	);
}
