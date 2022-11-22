/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        oxygen: ['Oxygen', 'sans-serif'],
      },
      lineHeight: {
        14: '3rem'
      },
      left: {
        11.5: '2.85rem'
      },
      borderWidth: {
        1 : '1px'
      },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  }
}
