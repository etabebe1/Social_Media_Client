//** */ In this file we configure css properties that are reusable aside default tailwind css properties for instance, :root ---> properties and sometimes beyond root /* **//

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    spacing: {
      1: "2px",
      2: "5px",
      2.6: "8px",
      3: "10px",
      3.2: "12px",
      3.8: "14px",
      4: "15px",
      5: "16px",
      6: "20px",
      7: "24px",
      7.5: "25px",
      7.6: "28px",
      8: "32px",
      8.6: "38px",
      8.9: "45px",
      9: "48px",
      9.1: "50px",
      9.6: "3.7rem",
      9.7: "4.5rem",
      10: "5rem",
      11: "7rem",
      11.3: "8rem",
      11.5: "9rem",
      11.6: "10rem",
      11.8: "11rem",
      12: "12rem",
      13: "15rem",
      13.5: "17rem",
      14: "20rem",
      14.5: "21rem",
      14.7: "22rem",
      15: "25rem",
      16: "80vw",
      16.1: "80vh",
      17: "90vw",
      18: "100vw",
      18.1: "100vh",
      19: "50%",
      20: "100%",
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px)  scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        /* colors */
        primary100: "#e2e0ff",
        primary200: "#c1beff",
        primary300: "#a29dff",
        primary400: "#837dff",
        primary500: "#645cff",
        primary600: "#504acc",
        primary700: "#3c3799",
        primary800: "#282566",
        primary900: "#141233",

        /* grey */
        grey50: " #f8fafc",
        grey100: " #f1f5f9",
        grey200: " #e2e8f0",
        grey300: " #cbd5e1",
        grey400: " #94a3b8",
        grey500: " #64748b",
        grey600: " #475569",
        grey700: " #334155",
        grey800: " #1e293b",
        grey900: " #0f172a",

        /* rest of the colors */
        black: "#222",
        blackMore: "#1e1e1e",
        white: "#fff",
        redLight: "#f8d7da",
        redDark: "#842029",
        greenLight: "#d1e7dd",
        greenDark: "#0f5132",

        /* unique colors*/
        whitenWhite: "#ededed",
        darkGray: "#464646",
        middleGray: "#a6a4a4",
        slatBlueGray: "#4c566a",
        lightSteelBlue: "#c0c5ce",
        dustyRose: "#d49a89",
        paleIvory: "#f2eecb",
        coral: "#ff6363",
        coralDarken: "#bf4a4a",
        darkCyan: "#1c6e8c",
        siennaBrown: "#997b99",
        goldenrod: "#d4af37",
      },

      spacing: {
        // special spacing conditions
        calc1: "calc(100vh-72px)",
        calc2: "calc(90vh+72px)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
