/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      "light-purple": "#6366f1",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      "pale-blue": "hsl(225, 100%, 94%)",
      "bright-blue": "hsl(245, 75%, 52%)",
      "very-pale-blue": "hsl(225, 100%, 98%)",
      "desaturated-blue": "hsl(224, 23%, 55%)",
      "dark-blue": "hsl(223, 47%, 23%)",
    },
    extend: {
      backgroundImage: {
        desktop: "url('/pattern-background-desktop.svg')",
        mobile: "url('/pattern-background-mobile.svg')",
      },
      screens: {
        lg: "1440px",
      },
      dropShadow: {
        "2xl": "0 18px 18px rgb(0 0 0 / 0.30)",
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.40)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        "100%": "100%",
        16: "4rem",
      },
    },
  },
  plugins: [],
};
