module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				myDarkBlue: '#2A0C4E',
				hoverAccent: '#552f82',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
