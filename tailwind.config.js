/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        app:"#84933B",
        second:"#F1F2D2",
        appborder:"##FFF5DA",
        side:"#84b4a8",
     
      }}
     
  
  },
  plugins: [require('daisyui')],
}