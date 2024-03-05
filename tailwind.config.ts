import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.8rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.563rem", "2rem"],
      "3xl": ["1.953rem", "2.25rem"],
      "4xl": ["2rem", "2.5rem"],
    },
    /*
     * we convert px media queries to em so that text-only zooms trigger
     * responsive breakpoints. We want the website to render correctly with
     * up to 200% text zoom (RGAA criteria) and this is the easiest way to achieve that.
     */
    screens: {
      sm: "40em", // 640px
      md: "48em", // 768px
      lg: "64em", // 1024px
      xl: "80em", // 1280px
      "2xl": "96em", // 1536px
    },
    extend: {
      fontFamily: {
        sans: ["Marianne", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dinum: {
          "white-0": "#FFFFFF",
          "white-1": "#F8F8F8",
          "grey-0": "#D9D9D9",
          "grey-1": "#7F7E7E",
          "grey-2": "#161616",
          "grey-3": "#666666",
          "grey-4": "#DDDDDD",
          "grey-5": "#3A3A3A",
          "blue-1": "#000091",
          "black-1": "#161616",
        },
        dsfr: {
          "blue-1": "#f5f5fe",
          "blue-2": "#1212ff",
          "blue-3": "#f3f6fe",
        },
      },
    },
  },
  plugins: [],
};
export default config;
