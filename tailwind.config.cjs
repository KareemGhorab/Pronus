/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			height: {
				"screen-9/10": "90vh",
				"screen-8/10": "80vh",
				"screen-7/10": "70vh",
			},
			fontFamily: {
				proza: ["Proza Libre", "sans"],
			},
			gridTemplateColumns: {
				about__paragraph: "minmax(0, 1fr) 30px",
			},
		},
	},
	plugins: [],
}
