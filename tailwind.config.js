/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'pacifico': ['Pacifico', 'sans-serif'],
      'poppins': ["Poppins", 'sans-serif'],
      'futura':['Futura Std', 'sans-serif'],
      'georgia':['Georgia', 'sans-serif']
    },
    animation: {
      'fade-top': 'fadeTop 800ms ease-in-out',
      'fade-in': 'slideInLeft 700ms ease-in-out',
      'slide-in-right': 'slideInRight 1s ease-in-out',
      'slide-in-left': 'slideInLeft 1s ease-in-out'
    },
    keyframes: {
      slideInRight: {
        '0%': {
          transform: 'translateX(30%)',
          opacity: '0'
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1'
        }
      },
      fadeTop: {
        '0%': {
          transform: 'translateY(-30%)',
          opacity: '0'
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: '1'
        }
      },
      fadeIn: {
        '0%': {
          opacity: '0'
        },
        '100%': {
          opacity: '1'
        }
      },
      slideInLeft: {
        '0%': {
          transform: 'translateX(-10%)',
          opacity: '0'
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1'
        }
      }
    },
  },
  plugins: [],
}

