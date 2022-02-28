module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-brackground": "#F6F6F7",
        "primary-font": "#222222",
        "secondary-font": "#888888",
        "required-star": "#C90000",
        "light-grey": "#CCCCCC", // border
        "dark-grey": "#222222", // border
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
