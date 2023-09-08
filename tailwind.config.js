/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xs': '360px',  // Custom screen for extra small devices
      'sm': '640px',  // Custom screen for small devices
      'md': '768px',  // Custom screen for medium devices
      'lg': '1024px', // Custom screen for large devices
      'xl': '1280px', // Custom screen for extra large devices
    },
  },
  plugins: [],
}

