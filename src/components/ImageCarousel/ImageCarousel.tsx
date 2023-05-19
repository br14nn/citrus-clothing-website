import { useState, useRef } from "react";
import F002 from "../../assets/images/F002.webp";
import F003 from "../../assets/images/F003.webp";
import F004 from "../../assets/images/F004.webp";
import F005 from "../../assets/images/F005.webp";
import ArrowIcon from "../../assets/svg/arrow-icon.svg";
import ArrowIcon2 from "../../assets/svg/arrow-icon-2.svg";
import ImageItem from "./ImageItem";
import NextImageButton from "./NextImageButton";

export default function () {
	const [showImage, setShowImage] = useState(0);
	const maxNumberOfImages = useRef(3); // count is in programming terms

	const showNextImage = () => {
		setShowImage((oldVal) => {
			if (oldVal === maxNumberOfImages.current) {
				return 0;
			} else {
				return oldVal + 1;
			}
		});
	};

	const showPreviousImage = () => {
		setShowImage((oldVal) => {
			if (oldVal === 0) {
				return maxNumberOfImages.current;
			} else {
				return oldVal - 1;
			}
		});
	};

	return (
		<div className="relative mx-auto mt-[30px] hidden h-[550px] w-[300px] bg-my-dark tablet:block">
			{showImage === 0 && <ImageItem extraClass={`bg-[-60px_-50px]`} backgroundImage={F002} />}
			{showImage === 1 && <ImageItem extraClass={`bg-[-100px_0px]`} backgroundImage={F003} />}
			{showImage === 2 && <ImageItem extraClass={`bg-[-110px_-80px]`} backgroundImage={F004} />}
			{showImage === 3 && <ImageItem extraClass={`bg-[-90px_-20px]`} backgroundImage={F005} />}

			<NextImageButton onClick={showNextImage} extraClass={`ml-auto mr-[1rem]`} src={ArrowIcon} />
			<NextImageButton
				onClick={showPreviousImage}
				extraClass={`mr-auto ml-[1rem]`}
				src={ArrowIcon2}
			/>
		</div>
	);
}
