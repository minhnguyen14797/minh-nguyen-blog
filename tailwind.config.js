/** @type {import('tailwindcss').Config} */



const COLORS = require('./constants/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./posts/*.{mdx,md}"
  ],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        danger: COLORS.danger,
        dark: COLORS.dark,
        light: COLORS.light,
        warning: COLORS.warning,
        info: COLORS.info,
        beige: COLORS.beige,
        darkBeige: COLORS.darkBeige
      }
    },
  },
  plugins: [],
}
