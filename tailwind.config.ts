import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        infinite_scroll: {
          "100%": {transform: "translate(-50%)"},
        },
      },
      animation:{ infinite_scroll: "infinite_scroll 50s linear infinite"},
    },
  },
  plugins: [],
};
export default config;
