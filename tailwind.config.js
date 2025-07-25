/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // si usás la carpeta /app (Next 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
