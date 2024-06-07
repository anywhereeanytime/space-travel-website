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
        fs400: "0.9rem",
        fs500: "1rem",
        fs200: "1.2rem",
      },
      letterSpacing: {
        letterSpacing1: "4.75px",
        letterSpacing2: "2.7px",
        letterSpacing3: "2.35px",
      },
      backdropFilter: {
        "blur-сustom": "blur(1.5rem)",
      },
      padding: {
        "clamp-small": "3rem",
        "clamp-medium": "7vw",
        "clamp-large": "7rem",
      },
      gap: {
        "gap-min": "1.5rem",
        "gap-max": "3.5rem",
        "gap-dynamic": "5vw",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".gap-clamp": {
          gap: "1.5rem",
        },
        "@screen md": {
          ".gap-clamp": {
            gap: "5vw",
          },
        },
        "@screen lg": {
          ".gap-clamp": {
            gap: "3.5rem",
          },
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
