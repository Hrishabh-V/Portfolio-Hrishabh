/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',  // Corrected key
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif'],  // Corrected font family casing
      },
    },
  },
  plugins: [],
};
