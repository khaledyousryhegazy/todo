/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0d0714",
        secondary: "#15101c",
        primary: "#9e78cf",
        ended: "#78cfb0",
        active: "#3e1671",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
