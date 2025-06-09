const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0': { 'background-position': '0 0' },
          '100%': { 'background-position': '100% 100%' }
        },
        bouncing: {
          '0': { 'transform': 'translateY(0)' },
          '50%': { 'transform': 'translateY(-1.2rem)' },
          '100%': { 'transform': 'translateY(0)' },
        },
      },
      animation: {
        'slow-slide': 'slide 270s linear infinite',
        'bounce-fixed': 'bouncing 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}