/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#6d706f",
          200: "#20c991",
          300: "#ff1f4f",
          400: "#dae0de",
          500: "#ffffff",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
