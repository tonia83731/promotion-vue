/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'default-white': '#FFF',
      'gradient-orange': '#E5793B',
      'gradient-pink': '#FF4185',
      'primary-theme': '#DA7D4A',
      'text-primary': '#334155',
      'text-secondary': '#94A3B8', // gray-500
      'bg-theme-1': '#FDFCFB',
      'bg-theme-2': '#F7ECE1'
    },
    fontFamily: {
      'mantou': ['MantouSans', 'sans-serif'],
      'inter' : ['Inter', 'sans-serif']
    },
    screens: {
      'mobile': '576px',
      'tablet': '768px',
      'desktop': '1400px'
    },
    extend: {}
  },
  plugins: []
}

