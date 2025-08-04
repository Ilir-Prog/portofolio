/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'theme-primary': 'var(--primary-color)',
        'theme-primary-light': 'var(--primary-light)',
        'theme-primary-dark': 'var(--primary-dark)',
        'theme-secondary': 'var(--secondary-color)',
        'theme-accent': 'var(--accent-color)',
      },
      backgroundImage: {
        'theme-gradient': 'linear-gradient(to right, var(--gradient-from), var(--gradient-to))',
      }
    },
  },
  plugins: [],
};
