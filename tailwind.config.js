/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '350px',
      ...defaultTheme.screens,
    },
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
      fontFamily: {
        serif: ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
  ],
};
