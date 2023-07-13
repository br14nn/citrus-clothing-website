import AboutUs from "../../assets/svg/AboutUs.svg";
import E001 from "../../assets/images/E001.webp";
import E001_Mobile from "../../assets/images/E001_Mobile.webp";
import AboutUsItem from "../AboutUsItem/AboutUsItem";

export default function () {
	return (
		<section id="aboutUs" className="relative w-full bg-my-dark p-[70px] tablet:p-[30px]">
			<img className="mx-auto h-auto w-full max-w-[1300px]" src={AboutUs} alt="About Us" />
			<img
				className="mx-auto -mt-[100px] block h-auto w-full max-w-[1300px] tablet:-mt-[70px] mobile:-mt-[45px] mobile-xs:hidden"
				src={E001}
				alt="About Us Image"
			/>
			<img
				className="mx-auto -mt-[30px] hidden h-auto w-full min-w-[300px] mobile-xs:block"
				src={E001_Mobile}
				alt="About Us Image"
			/>

			<div className="font-dosis mx-auto mt-[150px] flex w-full max-w-[1300px] flex-row items-start justify-between gap-y-[32px] text-my-white/50 tablet:mt-[80px] mobile:flex-col mobile:items-center">
				<AboutUsItem aboutUsItemTitle="STORE">
					<p>Ornare Massa Street</p>
					<p>Morbi Tincidunt Street</p>
					<p>Purus Viverra Street</p>
				</AboutUsItem>

				<AboutUsItem aboutUsItemTitle="EMAIL">
					<a href="#">citrus@gmail.com</a>
					<a href="#">citrus@yahoo.com</a>
				</AboutUsItem>

				<AboutUsItem aboutUsItemTitle="CONTACT US">
					<a href="https://twitter.com/" target="_blank">
						Twitter
					</a>
					<a href="https://www.instagram.com/" target="_blank">
						Instagram
					</a>
					<a href="https://www.facebook.com/" target="_blank">
						Facebook
					</a>
				</AboutUsItem>
				<AboutUsItem aboutUsItemTitle="COLLECTION">
					<a href="#">New Arrival</a>
					<a href="#">Discount</a>
					<a href="#">Promotion</a>
				</AboutUsItem>
			</div>
			<footer className="font-roboto-condensed mt-[100px] flex w-full items-center justify-center text-center text-my-white/50 tablet:mt-[50px]">
				<p>Coded By: Brian V. Vitualla. Not Original Design</p>
			</footer>
		</section>
	);
}
