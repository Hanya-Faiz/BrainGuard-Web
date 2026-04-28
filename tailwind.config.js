/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        background: "#000000",
        surface: "#121212",
        surfaceLight: "#1E1E1E"
      }
    },
  },
  plugins: [],
}
