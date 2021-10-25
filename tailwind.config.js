module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				myDarkBlue: '#9A5CE0',
				myLightBlue: '#20368F',
				hoverAccent: '#EBEBEB',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
