const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                inter: 'Inter',
                roboto: 'Roboto'
            },
            colors: {
                primary: '#124C5F',
                secondary: '#C7E7E1',
                grey_pink: '#F8F8F8'
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
