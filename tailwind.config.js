/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-dark-red': '#B81D24',
        'netflix-black': '#141414',
        'netflix-white': '#FFF',
        'netflix-grey': '#b3b3b3'
      }
    }
  },
  plugins: [],
}

