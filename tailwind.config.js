/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        soria: "soria",

        blacker_cond_med: "blacker_cond_med",
        blacker_bold: "blacker_bold",

        Josefin_Regular: "Josefin_regular",
        Josefin_bold: "Josefin_bold",

        saira_con_bold: "saira_con_bold",
        saira_con_bold_extra: "saira_con_bold_extra",

        montserrat_It_black: "montserrat_It_black",
        montserrat_black: "montserrat_black",
        montserrat_med: "montserrat_med",
        montserrat_sb: "montserrat_sb",
      },

      height: {
        "2px": "1.5px",
        22: "5.5rem",
        108: "27rem",
      },

      width: {
        percent95: "95%",
        percent90: "90%",
        percent80: "80%",
        percent70: "70%",
      },

      fontSize: {
        vs: ".8rem",
        md: ".925rem",

        "0xl": "0rem",
        "4.25xl": "2.6rem",
        "4.5xl": "2.9rem",
        "4.75xl": "4.3rem",
        "5.5xl": "3.3rem",
        "6.5xl": "4.2rem",
        "7.5xl": "5rem",
        "8.5xl": "7rem",
        "8.25xl": "6.5rem",
        "10xl": "8.5rem",
        "12xl": "10rem",
        "13xl": "11rem",
        "14xl": "12rem",
        "16xl": "13.3rem",
      },

      margin: {
        customML: "1%",
        customMR: "10%",
        customMR2: "20%",
      },

      rotate: {
        r22: "-22deg",
      },

      screens: {
        xxxs: "320px",
        xxs: "430px",
        xs: "500px",
        bsm: "750px",
        sxl: "2000px",
      },

      textColor: {
        teal: "teal",
        orangered: "orangered",
        wheat: "wheat",
      },

      backgroundColor: {
        gr: "#cbcbcb",
        gr2: "#1c1c19",
        wheat: "wheat",
        bg_special: "#dcdbd7",
        softWhiteLight: "rgba(255, 255, 255, 0.2)",
        softWhiteDark: "rgba(255, 255, 255, 0.1)",
      },

      backdropBlur: {
        xs: "2px",
        xxs: "1px",
        bsm: "8px",
      },

      dropShadow: {
        cus: "2px 2px 2px gray",
      },

      boxShadow: {
        whiteShadow:
          "0 5px 15px -3px rgb(255 255 255 / 0.3), 0 4px 6px -4px rgb(255 255 255 / 0.3), 0 0 10px rgb(255 255 255 / 0.3)",
        lighterWhiteShadow:
          "0 5px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1), 0 0 10px rgb(255 255 255 / 0.1)",
        darkShadow:
          "0 0px 10px -3px rgb(0 0 0 / 0.6), 0 4px 6px -4px rgb(0 0 0 / 0.3)",
        lighterDarkShadow:
          "0 0px 10px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.2)",
        glassShadowLight: "0 4px 30px rgba(175, 175, 175, 0.4)",
        glassShadowDark: "0 4px 30px rgba(255, 255, 255, 0.1)",

        CTAShadowLight: "0 4px 30px rgba(105, 105, 105)",
      },

      borderRadius: {
        "5xl": "4rem",
        "4xl": "3rem",
      },

      brightness: {
        overlay: "70%",
      },

      padding: {
        perc8: "8%",
        perc4: "4%",
      },

      gridTemplateRows: {
        0: "repeat(1,0fr)",
      },

      borderColor: {
        wheat: "wheat",
      },

      borderWidth: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
