module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '120': '34rem'
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
