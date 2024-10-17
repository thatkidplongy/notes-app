/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E7F6F2",
        primary: "#0D1B2A",
        noteBackground: "#F5F5D2",
        accent: "#3A86FF",
        secondaryAction: "#8338EC",
        error: "#FF006E",
      },
    },
  },
  plugins: [],
};
