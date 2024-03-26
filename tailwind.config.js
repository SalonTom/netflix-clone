/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./**/*.html"
  ],
  theme: {
    extends: {
      colors: {
        'red': '#E50914',
        'dark-red': '#B81D24',
        // 'black': '#221F1F',
        'black': '#141414',
        'white': '#FFF',
        'grey': '#b3b3b3'
      }
    },
  },
  plugins: [],
}

