/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            50: '#f2f6fa', 100: '#e1ebf3', 200: '#b9d0e3', 300: '#87afcf', 400: '#4c88b8',
            500: '#075A9D', 600: '#064f8a', 700: '#054071', 800: '#04345b', 900: '#032846',
          },
          secondary: {
            50: '#f2f4f5', 100: '#e1e5e8', 200: '#b9c3ca', 300: '#8798a5', 400: '#4c6478',
            500: '#072944', 600: '#06243b', 700: '#051d30', 800: '#041727', 900: '#03121e',
          },
          accent: {
            50: '#f3f8fb', 100: '#e4eef7', 200: '#c0d9ed', 300: '#93bee1', 400: '#5d9ed3',
            500: '#1F79C2', 600: '#1b6aaa', 700: '#16578b', 800: '#114670', 900: '#0d3657',
          },
          surface: '#F8FAFC',
          panel: '#F3F7FC',
          card: '#FFFFFF',
          border: '#e1ebf3',
          dark: { bg: '#072944', surface: '#06243b', card: '#051d30', border: '#041727' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'blob-1': 'blob 12s infinite ease-in-out',
        'blob-2': 'blob 15s infinite ease-in-out 3s',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        }
      }
    },
  },
  plugins: [],
}
