module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#fff',
			black: '#201A1A',
			grayscale: {
				50: '#F8F8F8',
				100: '#FAFAFA',
				150: '#F6F6F6',
				200: '#D3D3D3',
				300: '#C4C4C4',
				350: '#B3B3B3'
			},
			green: {
				100: '#CAE8D3',
				200: '#3AA85A',
				300: '#39543C'
			},
			blue: {
				100: '#0977BE',
				200: '#1C88CE',
				300: '#1E95DD'
			},
			red: {
				100: '#FFE3E3',
				200: '#FF5B5B',
				300: '#FF0000',
				400: '#FF2E2E',
			},
			yellow: {
				100: '#F4B63C',
				200: '#FFE073',
				300: '#FFB573'
			}
		},
		fontFamily: {
			'sans': ['Quicksand', 'Montserrat', 'Poppins'],
			'sans-serif': 'Inter'
		},
		extend: {
			transitionProperty: {
				'height': 'height'
			}
		},
	},
	plugins: [],
}
