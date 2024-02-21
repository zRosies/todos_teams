import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",

        // carouselRight: "linear-gradient(180deg, rgba(255,255,255,0))",
      },
      backgroundColor: {
        // "carousel-left": "linear-gradient(to left, rgba(255,0,0))",
        carouselRight: "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5e5cc4",
        secondary: "#151515",
        hover: "#615ECC",
        grayzy: "#19192A",
        tabs: "#D9D9D9",
        link: "#52A9AE",
        test: "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    animation: {
      slide: "slide 15s infinite linear ",
      navOpen: "navOpen .4s linear",
      navClosed: "navClosed .2s linear",
      cardOpen: "navOpen .3s linear",
      loading: "loading .8s linear infinite",
    },
    keyframes: {
      slide: {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(-900%)",
        },
      },
      navOpen: {
        "0%": {
          width: "0%",
          opacity: "0",
          display: "flex",
        },
        "100%": {
          width: "100%",
          opacity: "1",
        },
      },
      navClosed: {
        "0%": {
          width: "80%",
          opacity: "1",
        },
        "100%": {
          width: "0%",
          visibility: "hidden",
          opacity: "0",
        },
      },
      loading: {
        "0%": {
          transform: "rotate(0)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
  },

  plugins: [],
};
export default config;
