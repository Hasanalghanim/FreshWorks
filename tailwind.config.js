module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				myDarkPurple: '#2A0C4E',
				myLightPurple: '#8e6ab8',
				hoverAccent: '#552f82',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
