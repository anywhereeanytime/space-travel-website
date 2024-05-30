/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Bellefair"],
        sansCond: ["Barlow Condensed"],
        sansNormal: ["Barlow"],
      },
      colors: {
        clrDark: "hsl(230, 35%, 7%)",
        clrLight: "hsl(231, 77%, 90%)",
        clrWhite: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        fs900: "clamp(5rem, 8vw + 1rem, 9.375rem)",
        fs800: "3.5rem",
        fs700: "1.5rem",
        fs600: "1rem",
        fs500: "1rem",
        fs400: "0.9375rem",
        fs300: "1rem",
        fs200: "0.875rem",
      },
      letterSpacing: {
        letterSpacing1: "4.75px",
        letterSpacing2: "2.7px",
        letterSpacing3: "2.35px",
      },
    },
  },
  plugins: [],
};
