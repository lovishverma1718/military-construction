/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F10",
        background: "#F6F4EF",
        gold: {
          DEFAULT: "#C7A96B",
          dark: "#B39557",
          light: "#D5BE8F",
        },
        grey: "#8A8A8A",
        mutedBg: "#EFEAE2",
        card: "#FFFFFF",
        border: "rgba(15, 15, 16, 0.08)",
      },
      fontFamily: {
        heading: ["'Apple Garamond'", "'Cormorant Garamond'", "serif"],
        body: ["'Helvetica Neue'", "'Inter'", "sans-serif"],
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '36px',
      },
      boxShadow: {
        premium: '0 30px 80px rgba(0,0,0,0.08)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(.22, 1, .36, 1)',
      },
      transitionDuration: {
        editorial: '600ms',
      },
      maxWidth: {
        container: '1500px',
      }
    },
  },
  plugins: [],
}
