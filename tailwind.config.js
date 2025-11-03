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
        "shadow-drop-center": {
          "0%": {
            boxShadow:
              "0 0 3px rgba(0, 101, 134, 0.3), 0 0 5px rgba(0, 101, 126, 0.2), 0 0 5px rgba(0, 150, 200, 0.1)",
          },
          "100%": {
            boxShadow:
              "0 0 6px rgba(0, 179, 255, 0.353), 0 0 10px rgba(0, 179, 255, 0.288), 0 0 10px rgba(0, 179, 255, 0.205)",
          },
        },
      },
      animation: {
        "shadow-drop-center":
          "shadow-drop-center 1s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
