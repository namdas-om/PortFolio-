
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"]
      },
      colors: {
        accent: "#67e8f9",
        violet: "#a78bfa"
      },
      boxShadow: {
        glow: "0 0 40px rgba(103,232,249,0.12)"
      }
    }
  },
  plugins: []
};
