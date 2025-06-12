/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode support
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'film-reel': 'film-reel 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'slide-right': 'slide-right 15s linear infinite',
        'slide-diagonal': 'slide-diagonal 20s linear infinite',
        'slide-up': 'slide-up 12s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'film-reel': {
          '0%': {
            'background-position': '0 0'
          },
          '100%': {
            'background-position': '100% 100%'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(5deg)',
          }
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100vw)',
          }
        },
        'slide-diagonal': {
          '0%': {
            transform: 'translate(100%, 0) rotate(0deg)',
          },
          '100%': {
            transform: 'translate(-100%, 100vh) rotate(360deg)',
          }
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100vh)',
          },
          '100%': {
            transform: 'translateY(-100%)',
          }
        }
      },
    },
  },
  plugins: [],
};
