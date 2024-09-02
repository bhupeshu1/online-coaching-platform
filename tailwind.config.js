/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 8px 16px 0 rgb(63 46 28 / 7%)',
      },
      textColor:{
        'custom-color':'#242424'
      }
    },
  },
  plugins: [],
}