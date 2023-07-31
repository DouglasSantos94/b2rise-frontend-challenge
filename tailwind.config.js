/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        836: "52.25rem",
      },
      backgroundColor: {
        blue: "#20124E",
        green: "#00DDA5",
      },
      borderRadius: {
        10: "0.625rem",
      },
      boxShadow: {
        1: "0px 2px 3px rgba(0, 0, 0, 0.5)",
      },
      borderColor: {
        blue: "#170063",
        green: "#00AD81",
      },
    },
  },
  plugins: [],
};
