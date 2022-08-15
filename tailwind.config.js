/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      body: ['Josefin Sans', 'sans-serif'],
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
      },
      animation: {
        intro: 'intro 2s forwards',
      },
    },
  },
  plugins: [],
};
