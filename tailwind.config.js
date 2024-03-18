/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,html}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        yellow: "#ffd600",
        orange: "#EE9F2F",
        blue: "#0075BE",
        "light-grey": "#F6F7F6",
        "dark-brown": "#36321B",
        white: "#FFFFFF",
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
      },
    }
  },
  plugins: [],
};
