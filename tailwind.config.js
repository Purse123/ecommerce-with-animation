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
      }
    },
  },
  plugins: [],
}