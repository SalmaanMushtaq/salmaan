/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        basic: "#ff9559",
        background: "rgb(31 28 28 / 82%)",
        btnBackground: "rgb(46 44 44)",
        formTextColor: "#5F5F5F",
        navLinkBorder: "#f5f5f52b",
        darkBackground: "rgb(255 255 255 / 20%)",
        lightShadow: "1px 0px 10px 10px rgba(0, 0, 0, 0.3) inset",
      },
    },
  },
  plugins: [],
};
