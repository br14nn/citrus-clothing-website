import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"my-dark": "#1A1A1A",
				"my-yellow": "#FED906",
				"my-white": "#F3F3F3",
				"my-green": "#C3F400",
			},
			gradientColorStops: {
				48: "48%",
				76: "76%",
			},
			inset: {
				"test-1": "calc(900px - 100vw)",
			},
			screens: {
				"desktop-xl": { max: "1660px" },
				desktop: { max: "1440px" },
				tablet: { max: "1024px" },
				"mobile-xl": { max: "700px" },
				mobile: { max: "600px" },
				"mobile-xs": { max: "360px" },
			},
		},
	},
	plugins: [require("./src/plugins/scrollbar")],
};
