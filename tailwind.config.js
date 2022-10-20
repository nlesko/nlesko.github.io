/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: '#f8f1e5',
        coal: '#2f3131',
        'steel-blue': {
          50: '#dff1ff',
          100: '#c0dae9',
          200: '#a1bfd2',
          300: '#6890a9',
          400: '#6890a9',
          500: '#4f7d97',
          600: '#426e86', // steele blue
          700: '#335a6f',
          800: '#26475a',
          900: '#143242',
        }
      }
    },
  },
  plugins: [],
}
