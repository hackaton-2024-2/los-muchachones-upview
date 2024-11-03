/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#000',
				white: '#fff',
				transparent: 'transparent',
				lightBlue: '#16D2FC',
				darkBlue: '#1166DD',
				darkGray: '#13222E',
				mediumGray: '#13222E8F',
			},
		},
	},
	plugins: [],
};
