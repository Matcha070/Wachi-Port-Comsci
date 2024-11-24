/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3D3BF3',
        black: '#1A1A1D',
        blue2: '#006BFF',
        white: '#FBF8EF',
        skyblue: '#78B3CE',
        darkblue: '#000B58',
      }
    },
  },
  plugins: [],
}

