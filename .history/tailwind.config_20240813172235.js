/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#ffd60a",
          600: "#ffc300",
        },
        secondary: {
          500: "#fca311",
          600: "#fee440",
        },
        background: {
          700: "#292929",
          800: "#1a1a1a",
        },
        gray: {
          300: "#f8f9fa",
          400: "#adb5bd",
        },
      },
    },
  },
  plugins: [],
};
