type NavItemProps = {
	children: React.ReactNode;
};

export default function (props: NavItemProps) {
	return (
		<li>
			<a className="font-normal" href="#">
				{props.children}
			</a>
		</li>
	);
}
