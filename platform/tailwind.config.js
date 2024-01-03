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
			bottom: {
				18: '4.5rem',
			},
			blur: {
				xs: '2px',
				'4xl': '80px',
			},
			fontFamily: {
				sans: ['Figtree', ...defaultTheme.fontFamily.sans],
				title: ['Abang', 'monospace'],
			},
			colors: {
				primary: {
					DEFAULT: '#2400ff',
					light: '#3A1BFF',
					dark: '#150194',
				},
				secondary: {
					DEFAULT: '#ff1d7a',
					light: '#FF4A93',
					dark: '#F60063',
				},
				ternary: {
					DEFAULT: '#f5381b',
					light: '#FF6249',
					dark: '#9D1500',
				},
				quaternary: {
					DEFAULT: '#e7ce94',
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
				other: {
					DEFAULT: '#e7ce94',
				},
			},
			animation: {
				fillError: 'fillBackground 4s linear forwards',
				wave: 'wave 18s linear infinite',
				secondWave: 'wave 16s linear infinite',
				thirdWave: 'wave 20s linear infinite',
				gradientMouvementHorizontal:
					'gradientMouvementHorizontal 10s ease infinite',
				gradientMouvementVertical:
					'gradientMouvementVertical 10s ease infinite',
				linearGradientLeft: 'linearGradientLeft 3s linear infinite',
				linearGradientRight: 'linearGradientRight 3s linear infinite',
			},
			keyframes: {
				fillBackground: {
					'0%': { width: '0%' },
					'100%': { width: '100.8%' },
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
				gradientMouvementHorizontal: {
					'0%, 100%': {
						'background-position': 'left',
					},
					'50%': {
						'background-position': 'right',
					},
				},
				gradientMouvementVertical: {
					'0%, 100%': {
						'background-position': 'top',
					},
					'50%': {
						'background-position': 'bottom',
					},
				},
				linearGradientLeft: {
					'0%, 100%': {
						transform:
							'translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
					},
					'50%': {
						transform:
							'translate3d(0px, 0px, 150px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
					},
				},
				linearGradientRight: {
					'0%, 100%': {
						transform:
							'translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
					},
					'50%': {
						transform:
							'translate3d(0px, 0px, 550px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
					},
				},
			},
		},
	},
	plugins: [forms],
};
