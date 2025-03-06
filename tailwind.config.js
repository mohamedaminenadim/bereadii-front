/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#374151', // Dark grayish background
        secondary: '#1F2937', // Slightly lighter gray
        accent: '#4F46E5', // Indigo for highlights
      },
    },
  },
  plugins: [],
}
