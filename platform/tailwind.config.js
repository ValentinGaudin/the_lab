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
				title: ['Abang', 'monospace', 900],
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
				traverseUp: 'traverseUp 10s infinite',
				traverseUpDown: 'traverseUpDown 10s infinite',
				wave: 'wave 8s linear infinite',
				secondWave: 'wave 10s linear infinite',
				thirdWave: 'wave 16s linear infinite',
				drop: 'drop 10.9s linear infinite normal',
				drop2: 'drop 20s linear infinite normal',
				drop3: 'drop 12s linear infinite normal',
				drop4: 'drop 15.4s linear infinite normal',
				drop5: 'drop 16.5s linear infinite normal',
				drop6: 'drop 14.3s linear infinite normal',
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
				traverseUp: {
					'0%, 100%': {
						transform: 'translateY(-40%)',
						'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
					},
					'50%': {
						transform: 'translateY(140%)',
						'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
					},
				},
				traverseUpDown: {
					'0%': {
						transform: 'translateY(100%)',
						'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
						opacity: '1',
					},
					'100%': {
						transform: 'translateY(-1000%)',
						'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
						opacity: '0.5',
					},
				},
				drop: {
					'0%': {
						transform: 'translateY(25px)',
					},
					'30%': {
						transform: 'translateY(-20px) scale(.1)',
					},
					'30.001% ': {
						transform: 'translateY(25px) scale(1)',
					},
					'70%': {
						transform: 'translateY(55px)',
					},
					'100%': {
						transform: 'translateY(-10px) scale(.1)',
					},
				},
				wave: {
					to: { transform: 'translateX(-100%)' },
				},
				blobTurn: {
					'0%': {
						transform: 'rotate(0deg);',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
				blobSkew: {
					'0%': {
						transform: 'skewY(0deg)',
					},
					'13%': {
						transform: 'skewY( calc( (1.8deg) * var(--amount, 2)) )',
					},
					'18%': {
						transform: 'skewY( calc( (2.2deg) * var(--amount, 2)) )',
					},
					'24%': {
						transform: 'skewY( calc( (2.48deg) * var(--amount, 2)) )',
					},
					'25%': {
						transform: 'skewY( calc( (2.5deg) * var(--amount, 2)) )',
					},
					'26%': {
						transform: 'skewY( calc( (2.48deg) * var(--amount, 2)) )',
					},
					'32%': {
						transform: 'skewY( calc( (2.2deg) * var(--amount, 2)) )',
					},
					'37%': {
						transform: 'skewY( calc( (1.8deg) * var(--amount, 2)) )',
					},
					'50%': {
						transform: 'skewY(0deg)',
					},
					'63%': {
						transform: 'skewY( calc( (-1.8deg) * var(--amount, 2)) )',
					},
					'68%': {
						transform: 'skewY( calc( (-2.2deg) * var(--amount, 2)) )',
					},
					'74%': {
						transform: 'skewY( calc( (-2.48deg) * var(--amount, 2)) )',
					},
					'75%': {
						transform: 'skewY( calc( (-2.5deg) * var(--amount, 2)) )',
					},
					'76%': {
						transform: 'skewY( calc( (-2.48deg) * var(--amount, 2)) )',
					},
					'82%': {
						transform: 'skewY( calc( (-2.2deg) * var(--amount, 2)) )',
					},
					'87%': {
						transform: 'skewY( calc( (-1.8deg) * var(--amount, 2)) )',
					},
					'100%': {
						transform: 'skewY(0deg)',
					},
				},
				blobScale: {
					'0%': {
						transform: 'scaleX(.9) scaleY(1)',
					},
					'25%': {
						transform: 'scaleX(.9) scaleY(.9)',
					},
					'50%': {
						transform: 'scaleX(1) scaleY(.9)',
					},
					'75%': {
						transform: 'scaleX(.9) scaleY(.9)',
					},
					'100%': {
						transform: 'scaleX(.9) scaleY(1)',
					},
				},
			},
		},
	},
	plugins: [forms],
};
