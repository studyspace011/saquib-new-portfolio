// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4F46E5', // Custom brand color
        'secondary-gray': '#F9FAFB',
      }
    },
  },
  plugins: [],
}