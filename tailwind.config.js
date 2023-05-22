/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{js,jsx,ts,tsx}", //esto también es una forma de englobar subdirectorios
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", `sans-serif`],
				montserrat: ["Montserrat", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			screens: {
				'cel': '320px',
			},
			backgroundImage: {
				'backgroundManga': "url('../assets/images/lect.png')"
			},
			dropShadow: {
				'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
				'4xl': [
					'0 35px 35px rgba(0, 0, 0, 0.25)',
					'0 45px 65px rgba(0, 0, 0, 0.15)'
				]
			}
		},
	},
	variants: {},
	plugins: [],
};
