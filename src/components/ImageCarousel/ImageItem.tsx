type ImageItemProps = {
	backgroundImage: string;
	extraClass: string;
};

export default function (props: ImageItemProps) {
	return (
		<a href="#">
			<div
				className={`${props.extraClass} h-full w-full bg-auto bg-no-repeat`}
				style={{ backgroundImage: `url(${props.backgroundImage})` }}
			/>
			<div className="font-roboto-condensed absolute inset-0 mb-[20px] ml-[20px] mt-auto h-fit w-fit font-medium text-my-white">
				<p>Faucibus scelerisque</p>
				<p>Auctor eu augue 2023</p>
			</div>
		</a>
	);
}
