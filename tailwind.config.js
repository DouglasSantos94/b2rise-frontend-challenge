/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        836: "52.25rem",
      },
      backgroundColor: {
        buttonBlue: "#170063",
        buttonGreen: "#00DDA5",
      },
      borderRadius: {
        10: "0.625rem",
      },
      boxShadow: {
        1: "0px 2px 3px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
