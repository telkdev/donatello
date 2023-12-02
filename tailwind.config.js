/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "3.5rem",
        xl: "7.5rem",
        "2xl": "3.5rem",
      },
    },

    extend: {
      colors: {
        graphic: "#4F4C4C",
        grey: "#666666",
        "light-grey": "#E1E1E1",
      },
      screens: {
        sm: { min: "320px", max: "767px" },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          margin: "0 auto",
          padding: "0 1rem",
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
            padding: "0 2rem",
          },
          "@screen xl": {
            maxWidth: "1440px",
            padding: "0 2rem",
            padding: "0 7.5rem",
          },
        },
      });
    },
  ],
};
