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
			blur: {
				'4xl': '80px',
			},
			fontFamily: {
				sans: ['Figtree', ...defaultTheme.fontFamily.sans],
				title: ['Abang', 'monospace'],
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
				wave: 'wave 8s linear infinite',
				secondWave: 'wave 10s linear infinite',
				thirdWave: 'wave 16s linear infinite',
				gradientMouvement: 'gradientMouvement 1s ease infinite',
				linearGradientLeft: 'linearGradientLeft 10s linear infinite',
				linearGradientRight: 'linearGradientRight 10s linear infinite',
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
				gradientMouvement: {
					'0%': {
						'background-position': '0% 0%',
					},
					'50%': {
						'background-position': '50% 0%',
					},
					'100%': {
						'background-position': '100% 0%',
					},
				},
				linearGradientLeft: {
					'0%, 100%': {
						transform:
							'translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-27deg) skew(0deg, 0deg)',
					},
					'50%': {
						transform:
							'translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-42deg) skew(0deg, 0deg)',
					},
				},
				linearGradientRight: {
					'0%, 100%': {
						transform:
							'translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(42deg) skew(0deg, 0deg)',
					},
					'50%': {
						transform:
							'translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(35deg) skew(0deg, 0deg)',
					},
				},
			},
		},
	},
	plugins: [forms],
};
