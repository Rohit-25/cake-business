/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1E7",
        card: "#FBF8F2",
        stone: "#E4DCD0",
        chocolate: "#2C2118",
        cocoa: "#5C4A3A",
        blush: "#C4A39A",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 36px rgba(44, 33, 24, 0.1)",
      },
    },
  },
  plugins: [],
};
