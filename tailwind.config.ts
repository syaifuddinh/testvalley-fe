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
        "primary": "rgb(0, 208, 148)",
        "primary2": "rgb(0, 158, 138)",
        "black": "rgb(51, 51, 51)",
        "black2": "rgba(51, 51, 51, 0.5)",
        "black3": "#000",
        "gray1": "rgb(221, 221, 221)",
        "gray2": "rgb(238, 238, 238)",
        "gray3": "rgb(153, 153, 153)",
        "orange1": "rgb(255, 80, 35)",
        "backdrop": "rgb(246, 250, 251)"
      }
    },
  },
  plugins: [],
};
export default config;
