import RightDownArrowSvg from "../../assets/svg/rightDownArrow.svg";

export default function () {
	return (
		<div className="absolute bottom-0 right-0 flex h-[60px] w-[60px] items-center justify-center rounded-tl-[20px] bg-my-green">
			<img className="h-[27px] w-[34px]" src={RightDownArrowSvg} alt="Right down arrow svg" />
		</div>
	);
}
