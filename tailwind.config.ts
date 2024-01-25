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
      },
      colors: {
        primary: "#c6531f",
        primaryLight: "#f9e8d5",
        primaryDark: "#b14716",
        secondary: "#078ab4",
        secondaryBlue: "#037ca3",
        secondaryLight: "#b4e1ef",
        secondaryDark: "#037297",
        linkColor: "#1e75c6",
        $neutral0: "#ffffff",
        $neutral1: "#ededed",
        $neutral2: "#d9d9d9",
        $neutral3: "#b1b1b1",
        $neutral4: "#515151",
        $neutral5: "#212020",
      },
    },
  },
  plugins: [],
};
export default config;
