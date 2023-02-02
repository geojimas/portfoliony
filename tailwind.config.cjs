/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: 'fadeOut 3s ease-in-out'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.600') },
          '100%': { backgroundColor: theme('colors.transparent') }
        }
      })
    }
  },
  plugins: []
}
