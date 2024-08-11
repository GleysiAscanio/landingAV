import type { Config } from "tailwindcss";

export default {
  content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "own-white": "#ffffff",
        "own-black": "#000E29",
        "own-sky": "#0CE0FF",
        "own-red": "#FD3358",
        "own-green": "#e05483",
        "own-blue": "#2CA2FB",
        "own-grey-1": "#F0F0F0",
        "own-grey-2": "#F9F9F9",
        "own-text-p": "#8A90A2",
        "own-theme-1": "#eb9146",
        "own-theme-2": "#901eb7",
        "own-border-1": "#ff3547",
        "own-border-2": "#901eb7",
      },
    },
  },
  plugins: [],
} satisfies Config;
