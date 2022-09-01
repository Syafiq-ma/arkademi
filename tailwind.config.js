module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#fff',
			black: '#1c1d20',
			gray: {
				50: '#333539',
				100: '#3E3F43',
				200: '#94969B',
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
				100: '#FFE0E0',
				200: '#F94759'
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
