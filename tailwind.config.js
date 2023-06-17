/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        yellow: "#ffde01",
        lightYellow: "#cfda00",
        orange: "#ff7401",
        purple: "#bb77fe",
        black: "#000000",
        darkPurple: "#585eaa",
      },
      fontFamily: {
        primary: "Special Elite, cursive",
        secondary: "Bagel Fat One, cursive",
      },
    },
  },
  plugins: [],
};
