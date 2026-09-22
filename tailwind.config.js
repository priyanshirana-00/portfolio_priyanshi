/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        editorial: {
          bg: '#F6F4EE',
          surface: '#EDE9DE',
          card: '#FFFFFF',
          dark: '#141413',
          darkCard: '#1A1917',
          muted: '#5C5A53',
          lightMuted: '#8C8980',
          border: '#DDD8CB',
          borderDark: '#2E2D2A',
          terracotta: '#8C5338',
        }
      },
      letterSpacing: {
        editorial: '0.18em',
        widest: '0.22em'
      }
    },
  },
  plugins: [],
}

