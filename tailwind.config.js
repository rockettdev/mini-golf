/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['SlatePro-Bold'],
      },
      backgroundImage: {
        'main-bg': "url('/src/Assets/golfcoursebg.png')"
      }
    },
  },
  plugins: [],
}

