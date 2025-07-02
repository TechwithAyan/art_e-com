/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Dancing Script", "cursive"],
        signature: ["Pacifico", "cursive"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
