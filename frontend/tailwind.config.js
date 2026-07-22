/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Include Nuxt app and components
    "./app/**/*.{vue,js,ts,jsx,tsx,html}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./plugins/**/*.{js,ts}",
    "./*.html",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float 8s ease-in-out infinite reverse',
        'slide-down': 'slideDown 0.8s ease-out',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'expand-width': 'expandWidth 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out 0.5s both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
        slideDown: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        expandWidth: {
          'from': { width: '0' },
          'to': { width: '80px' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '0.7', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}