/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      padding: {
        sm: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
      },
      height: {
        "calendar-sm": "400px",
        "calendar-md": "600px",
      },
      colors: {
        main: "#1C0C5B", // Main color
        secondary: "#3D2C8D", // Secondary color
        third: "#916BBF", // Third color
        fourth: "#C996CC", // Fourth color
        white: "#FFFFFF", // Text color
      },
      maxWidth: {
        maxWidth: "600px", // Max width of 600px
      },
      animation: {
        "slide-up": "slide-up 0.3s ease-out forwards",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
