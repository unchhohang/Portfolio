/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  fontLoaders: [
    { loader: "@next/font/google", options: { subsets: ["latin"] } },
  ],

  theme: {
    fontFamily: {
      default: ["var(--body-poppins)"],
      inconsolata: ["var(--body-inconsolata)"],
    },
    screens: {
      sm: "426px",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
