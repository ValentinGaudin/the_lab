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
                ivory: {
                    DEFAULT: '#FFFFF0',
                },
                marble: {
                    DEFAULT: '#F2F8FC'
                },
                pearl : {
                    DEFAULT: '#FCFCF7'
                },
                lavender : {
                    DEFAULT:'#F4F1F8',
                },
                'cold-steel' : {
                    DEFAULT: '#F8F7F4',
                },
                'dark-gray': {
                    DEFAULT: '#313638'
                } ,
                'dark-green': {
                    DEFAULT: '#012622'
                },
                'dark-lilac': {
                    DEFAULT : '#342E37'
                },
                'dark-red': {
                    DEFAULT : '#2F0601'
                },
                'dark-blue': {
                    DEFAULT : '#0A2342'
                },
                'dark-plum': {
                    DEFAULT : '#482C3D'
                },
                'dark-brown': {
                    DEFAULT : '#28190E'
                },
                dark: {
                    DEFAULT: '#151623',
                },
            },
        },
    },

    plugins: [forms],
};
