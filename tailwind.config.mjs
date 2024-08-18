/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Libre Franklin'", "sans-serif"],
        serif: ["'Source Serif Pro'", "serif"],
      },
    },
    colors: {
      paper: "#e9e4d9",
      ink: "#383732",
    },
  },
  plugins: [],
};
