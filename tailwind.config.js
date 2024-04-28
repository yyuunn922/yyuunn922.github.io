/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dim: {
          translucent: '#282c3480'
        }
      },
      keyframes: {
        cursor: {
          '50%': {opacity: 0}
        }
      },
      animation: {
        cursor: 'cursor .5s infinite',
      }
    },
  },
  plugins: [],
}

