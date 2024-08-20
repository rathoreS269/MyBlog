/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'compress-expand': 'compressExpand 3s ease-in-out infinite',
      },
      keyframes: {
        compressExpand: {
          '0%': {
            transform: 'scaleX(0.1)',
            opacity: '0',
          },
          '50%': {
            transform: 'scaleX(1.2)',
            opacity: '1',
          },
          '100%': {
            transform: 'scaleX(1)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}

