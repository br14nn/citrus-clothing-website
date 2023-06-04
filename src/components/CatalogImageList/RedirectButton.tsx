import RightDownArrow from "../../assets/svg/rightDownArrow.svg";

type RedirectButtonProps = {
	extraClass: string;
};

export default function (props: RedirectButtonProps) {
	return (
		<div
			className={`${props.extraClass} flex h-[60px] w-[60px] items-center justify-center rounded-tl-[20px] bg-my-green`}
		>
			<img className="h-[26px] w-[34px]" src={RightDownArrow} alt="Right down arrow" />
		</div>
	);
}
