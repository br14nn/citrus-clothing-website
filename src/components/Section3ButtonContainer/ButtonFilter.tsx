type ButtonFilterProps = {
	children: React.ReactNode;
};

export default function (props: ButtonFilterProps) {
	return (
		<button className="font-dosis rounded-[20px] border border-my-dark px-[20px] py-[8.5px] leading-none text-my-dark">
			{props.children}
		</button>
	);
}
