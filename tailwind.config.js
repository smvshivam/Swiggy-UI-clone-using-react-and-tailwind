/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'black-soft': 'rgba(2, 6, 12, 0.6)',
        'rd':'rgba(2, 6, 12, .6)',
        'df':'rgba(2, 6, 12, 0.45)',
        
      },
      colors:{
        'saffron':'#FF5200',
        'black-soft': 'rgba(2, 6, 12, 0.6)',
      }
    },
  },
  plugins: [],
}