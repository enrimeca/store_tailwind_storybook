module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '18': '4.5rem',
        '120': '34rem'
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-12%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        bounce: 'bounce 1s 2',
      }
    },
  },
  variants: {
    extend: {
      filter: ['hover', 'group-hover'],
      animation: ['hover'],
    },
  },
  plugins: [],
}
