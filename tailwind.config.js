/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/https://cdn-prod.mytutor.co.uk/signup-assets/subject-step.jpg')",
      }
    },
  },
  plugins: [],
}

