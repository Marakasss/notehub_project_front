// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggleX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(8px)" },
        },
      },
      animation: {
        wiggleX: "wiggleX 0.5s ease-in-out infinite",
        "shadow-drop-center": "shadow-drop-center .3s ease-in-out both",
      },
    },
  },
  plugins: [],
};
