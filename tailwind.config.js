/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // add this so Tailwind works in all JS/JSX files
  ],
  theme: {
  extend: {
    fontFamily: {
      pixel: ["'Press Start 2P'", "monospace"],
    },
    animation: {
      glitch: "glitch 4s infinite steps(1, end)"
    },
    keyframes: {
      glitch: {
        "0%, 100%": { transform: "translateY(0)" },
        "25%": { transform: "translateY(-2.5rem)" },
        "50%": { transform: "translateY(-5rem)" },
        "75%": { transform: "translateY(-7.5rem)" }
      }
    }
  }
},
  plugins: [],
}

