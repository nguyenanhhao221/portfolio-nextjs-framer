/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                '5b-yellow': '#ffb400',
                'gradient-purple-apple-from': '#8727ff',
                'gradient-purple-apple-via': '#9d44fd',
                'gradient-purple-apple-to': '#ff9fe1',
                'gradient-blue-apple-from': '	#252fff',
                'gradient-blue-apple-via': '#256af3',
                'gradient-blue-apple-to': '#7cc0e2',
            },
        },
    },
    plugins: [require('prettier-plugin-tailwindcss')],
};
