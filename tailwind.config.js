/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
          '.scrollbar': {
              overflowY: 'auto',
              scrollbarColor: `${theme('colors.blue.600')} ${theme('colors.blue.200')}`,
              scrollbarWidth: 'none',
          },
          '.scrollbar::-webkit-scrollbar': {
              height: '0px',
              width: '0px',
          },
          '.scrollbar::-webkit-scrollbar-thumb': {
              backgroundColor: theme('colors.blue.600'),
          },
          '.scrollbar::-webkit-scrollbar-track-piece': {
              backgroundColor: theme('colors.white'),
          },
      });
  }),
  ],
}

