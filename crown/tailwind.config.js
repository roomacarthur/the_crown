/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        blue: "#073879",
        blue2: "#0F2644",
        secondary: "#00f6ff",
        accent: "#B1955F",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        background: "#F3FFFA",
        brown: "#342A18",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        heading: ["Libre Baskerville", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};