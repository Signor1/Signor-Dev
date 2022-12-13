/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway"],
        playfair: ["Playfair Display"],
      },
      colors: {
        color3: "#1acbe9",
        color2: "#d8b53a",
        color1: "#75fd92",
      },
    },
  },
  plugins: [],
};
