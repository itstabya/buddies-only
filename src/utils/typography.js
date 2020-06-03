import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Rubik",
      styles: ["300", "400", "500"],
    },
    {
      name: "Karla",
      styles: ["300", "400", "500"],
    },
  ],
  headerFontFamily: ["Rubik", "Rubik Mono One", "sans-serif"],
  bodyFontFamily: ["Karla", "sans-serif"],
  // See below for the full list of options.
})

export default typography
