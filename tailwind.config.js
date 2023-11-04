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
        grey: "#9D9C9C",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          margin: "0 auto",
          padding: "0 2rem",
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen xl": {
            maxWidth: "1440px",
            padding: "0 7.5rem",
          },
        },
      });
    },
  ],
};
