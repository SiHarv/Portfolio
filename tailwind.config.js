/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          grey: '##211E19',
          white: '#F8FAFC',
          blue: '#37B7C3'
        }
      }
    },
  },
  plugins: [],
}