/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      colors: {
        bg: '#0a0f1e',
        accent: '#00f5ff',
        accent2: '#a855f7',
      },
    },
  },
  plugins: [],
}

