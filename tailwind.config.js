/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				'sans': ["Oxygen", "sans-serif"]
			},
			colors: {
				primary: "#7b5799",
			}
		},
  	},
  	plugins: [],
}

