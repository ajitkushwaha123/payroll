/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //Light Theme
        primary: "#7152F3",
        mainBg: "#022cff",
        secondary: "#FEF5EA",
        bodyBg: "#EEF0FA",
        lightBlue: "#ECEAFD",
        lightGreen: "#CBFCFE",
        superLightGreen: "#EBFCD0",

        //Dark Theme
        darkPrimary: "#202325",
        darkMainBg: "#797B7C",

        light: {
          txtWhite: "#fff",
          secondary: "#111",
        },
        dark: {
          txtWhite: "#fff",
          secondary: "#FEF5EA",
          darkPurple: "#1b1526",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
