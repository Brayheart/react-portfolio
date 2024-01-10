/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '0': '0',
        '100': '1',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

