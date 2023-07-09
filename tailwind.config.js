/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      logo: ['Belanosima'],
      heading: ['"Inter Tight"'],
    },
    extend: {
      keyframes: {
        intro: {
          '0%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          },
          '100%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
        },
        moveArrow: {
          '0%': {
            transform: 'translateY(-30px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        move: {
          '0%': {
            transform: 'translateY(-100px)',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
      animation: {
        intro: 'intro 2s forwards',
        moveArrow: 'moveArrow 1s alternate-reverse infinite',
        moveDown: 'move 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
