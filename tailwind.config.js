/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3eea2e',
        hover: 'rgb(213 215 217 / 16%)'
      }
    }
  },
  plugins: []
}
