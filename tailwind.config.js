/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#2F4B5D',
        'brand-light': '#F8F4ED',
        'brand-red': '#C3272B',
        'brand-dark-80': 'rgba(47, 75, 93, 0.8)',
        'brand-dark-60': 'rgba(47, 75, 93, 0.6)',
        'brand-dark-40': 'rgba(47, 75, 93, 0.4)',
        'brand-dark-20': 'rgba(47, 75, 93, 0.2)',
        'brand-dark-10': 'rgba(47, 75, 93, 0.1)',
      },
      fontFamily: {
        'serif-zh': ['"Noto Serif SC"', '"Songti SC"', 'serif'],
        'serif-en': ['"EB Garamond"', 'Georgia', 'serif'],
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
