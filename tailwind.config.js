import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-80': '80vh',
      },
      borderWidth: {
        'w-0.5': '0.5px',
      },
      colors: {
        'orange-1': '#FF6E40'
      },
      animation: {
        sliding: 'slide 10s infinite linear'
      },
      keyframes: {
        slide: {
          'from': {transform: 'translateX(0)'},
          'to': {transform: 'translateX(-100%)'},
        }
      }
    },
  },
  plugins: [],
}