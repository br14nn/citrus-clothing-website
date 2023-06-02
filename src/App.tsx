import Section1 from "./components/Sections/Section1";
import Section2 from "./components/Sections/Section2";
import Section3 from "./components/Sections/Section3";

export default function () {
	return (
		<main className="h-full w-full min-w-[360px] overflow-y-auto overflow-x-hidden">
			<Section1 />
			<Section2 />
			<Section3 />
		</main>
	);
}
