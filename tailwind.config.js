/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%,100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(6px)' }
        }
      },
      animation: {
        move: "move 3s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}

