import RightDownArrow from "../../assets/svg/rightDownArrow.svg";

export default function () {
	return (
		<div className="absolute bottom-0 right-0 z-10 flex h-[60px] w-[60px] items-center justify-center rounded-tl-[20px] bg-my-green">
			<img className="h-[26px] w-[34px]" src={RightDownArrow} alt="Right down arrow" />
		</div>
	);
}
