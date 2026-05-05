/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        invofest: '#990551',
        invofest_secondary: '#fdf2f8',
        invofest_dark: '#7a0441'
      }
    },
  },
  plugins: [],
}
