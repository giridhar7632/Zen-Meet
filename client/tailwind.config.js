/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        'shape-blob': '40% 50% 30% 40%',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { borderRadius: '33% 67% 70% 30% / 30% 40% 70% 70%' },
          '20%': { borderRadius: '37% 63% 51% 49% / 37% 35% 35% 63%' },
          '40%': { borderRadius: '36% 64% 64% 36% / 64% 48% 52% 26%' },
          '60%': { borderRadius: '37% 63% 51% 49% / 30% 30% 70% 73%' },
          '80%': { borderRadius: '40% 60% 42% 58% / 51% 51% 49% 59%' },
        },
        'movement-one': {
          '0%,  100%': { transform: 'none' },
          '50%': { transform: 'translate(50%, 20%) rotateY(10deg) scale(1)' },
        },
        'movement-two': {
          '0%,  100%': { transform: 'none' },
          '50%': { transform: 'translate(50%, 20%) rotate(-200deg) scale(1.3)' },
        },
        skewing: {
          '0%': { transform: 'skewX(6deg)' },
          '10%': { transform: 'skewX(-6deg)' },
          '20%': { transform: 'skewX(4deg)' },
          '30%': { transform: 'skewX(-4deg)' },
          '40%': { transform: 'skewX(2deg)' },
          '50%': { transform: 'skewX(-6deg)' },
          '55%': { transform: 'skewX(6deg)' },
          '60%': { transform: 'skewX(-5deg)' },
          '65%': { transform: 'skewX(5deg)' },
          '70%': { transform: 'skewX(-4deg)' },
          '75%': { transform: 'skewX(4deg)' },
          '80%': { transform: 'skewX(-3deg)' },
          '85%': { transform: 'skewX(3deg)' },
          '90%': { transform: 'skewX(-2deg)' },
          '95%': { transform: 'skewX(2deg)' },
          '100%': { transform: 'skewX(1deg)' },
        },
        'skewing-child': {
          '0%': { transform: 'skewX(-10deg)' },
          '100%': { transform: 'skewX(10deg)' },
        },
        moving: {
          '0%': { transform: 'translate(calc(var(--size) / -2.5))' },
          '30%': { transform: 'translate(calc(var(--size) / -10))' },
          '70%': { transform: 'translate(calc(var(--size) / 10))' },
          '100%': { transform: 'translate(calc(var(--size) / 2.5))' },
        },
        squishing: {
          '10%, 40%, 80%': { transform: 'scale(1, .9)' },
          '0%, 30%, 60%, 100%': { transform: 'scale(.9, 1)' },
        },
      },
      animation: {
        skewing: 'skewing 2s 1.5s ease-in-out infinite',
        'skewing-child': 'skewing-child .2s ease-in-out infinite alternate',
        moving: 'moving 2s cubic-bezier(.97,.01,.12,.99) infinite alternate',
        squishing: 'squishing 1s ease-in-out infinite alternate',
      },
      screens: {
        laptop: '1024px',
        desktop: '1281px',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Ubuntu',
          'sans-serif',
        ],
      },
    },
  },
}
