const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', "sans-serif"],
      },
      backgroundImage: {
        "home-bkg": "url(/images/home.png)",
        "yellow-bkg": "url(/images/yellow.png)",
        "cq-bkg": "url(/images/cq.png)",
        newsletter: "url(/images/newsletter.png)",
        footer: "url(/images/footer.png)",
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          dark: "#4D5358",
        },
        black: {
          light: "#1B1C1C",
          DEFAULT: "#0E0E10",
        },
        grey: {
          extralight: "#C1C7CD",
          light: "303031",
          DEFAULT: "#F2F4F8",
          dark: "#878D96",
        },
        yellow: {
          light: "#F6E88F",
          DEFAULT: "#FFC800",
        },
        indigo: "#6E7FCF",
        teal: colors.teal,
        cyan: colors.cyan,
        green: "#5FFF90",
        skyBlue: "#00EDFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
