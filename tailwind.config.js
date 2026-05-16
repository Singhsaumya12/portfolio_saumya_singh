/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  theme: {
  extend: {
    colors: {
      gallery: {
        bg: "#F7F6F3",
        surface: "#ECEAE6",
        dark: "#0F1115",
        text: "#1C1C1C",
        muted: "#6B6B6B",
        border: "#D6D3CD",
        accent: "#C6A15B",
        violet: "#8B5CF6",
      },
    },
  },
},
  plugins: [],
};
