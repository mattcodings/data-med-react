/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "active-tab": "#4a56e2", // Custom color for active tabs
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "winter",
      "dracula",
      {
        datamed: {
          primary: "#0A3684",
          secondary: "#4C061D",
          accent: "#EBF6FF",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "grey-bg": "#ccc",
        },
      },
    ],
  },
};
