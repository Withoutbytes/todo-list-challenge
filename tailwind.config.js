/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1F1C15",
				secondary: "#FFF8E1",
				tertiary: "#FDE694",
				quartiary: "#C4B062",
				quinary: "#F5F5F5",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
