// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{njk,md,js}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: {
              'jolie-couleur': '#223a5c',
            },
          },
        },
      }),
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
