/** @type {import('tailwindcss').Config} */
const { Colors } = require('./theme/colors');

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./views/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
     Colors,
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

