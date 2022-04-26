module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "aside-xl": "235px",
        "aside-md": "89px",
        "aside-sm": "0px",
        "search-xl": "392px",
        "user-xl": "178px",
      },
      height: {
        main: "calc(100vh - 64px)",
      },
      boxShadow: {
        link: "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)",
      },
    },
    fontFamily: {
      inter: ["Inter"],
    },
    colors: {
      white: "#FFFFFF",
      primary: "#00C614",
      "primary-1": "#EFFBF0",
      succeed: "#44C776",
      warning: "#F58A28",
      "warning-1": "#FDF4ED",
      error: "#F52828",
      "error-1": "#FBEFF0",
      neutral: "#6B6C72",
      "neutral-9": "#3E3F48",
      "neutral-8": "#88898E",
      "neutral-7": "#6B6C72",
      "neutral-5": "#B2B2B6",
      "neutral-3": "#D2D2D5",
      "neutral-2": "#E5E5E6",
      "neutral-2a": "#F2F2F3",
    },
  },
  plugins: [],
};
