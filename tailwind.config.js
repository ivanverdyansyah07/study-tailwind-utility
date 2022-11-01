/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        'blackPrimary': '#1e1e1e',
      },
      fontFamily: {
        inter: ['Inter'],
      }
    },
  },
  plugins: [],
}
