/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        '45deg-gradient': 'linear-gradient(45deg, #1e3a8a, #2563eb, #06b6d4)',
      },
    },
  },
  plugins: [],
};
