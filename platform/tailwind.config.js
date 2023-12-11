import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.tsx',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Figtree', ...defaultTheme.fontFamily.sans],
				title: ['Orbitron', 'monospace', 900],
			},
			colors: {
				primary: {
					DEFAULT: '#2400ff',
				},
				secondary: {
					DEFAULT: '#0087ff',
				},
				ternary: {
					DEFAULT: '#ff1d7a',
				},
				fourth: {
					DEFAULT: '#f5381b',
				},
				fifth: {
					DEFAULT: '#ff5335',
				},
				marble: {
					DEFAULT: '#F2F8FC',
				},
				pearl: {
					DEFAULT: '#FCFCF7',
				},
				'cold-steel': {
					DEFAULT: '#F8F7F4',
				},
				'dark-blue': {
					DEFAULT: '#0A2342',
				},
				dark: {
					light: '#111015',
					DEFAULT: '#151623',
				},
			},
			animation: {
				fillError: 'fillBackground 4s linear forwards',
				moveHorizontally: 'moveHorizontally 1s infinite;',
			},
			keyframes: {
				fillBackground: {
					'0%': { width: '0%' },
					'100%': { width: '100.8%' },
				},
				moveHorizontally: {
					'0%, 100%': {
						transform: 'translateX(-25%)',
						'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
					},
					'50%': {
						transform: 'none',
						'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
					},
				},
			},
		},
	},
	plugins: [forms],
};
