/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          grey: '#9AA6B2',
          white: '#F8FAFC',
          blue: '#37B7C3'
        }
      }
    },
  },
  plugins: [],
}