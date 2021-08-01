module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'garamond': 'EB Garamond',
      },
      colors: {
        without: '#CACACA',
        product: '#EC3339',
        textColor: '#363636',
        whiteSmoke: '#F5F5F5',
        carousel: '#DCECF1',
        hr: '#7BB8CB',
        testimonial: '#91C4D4',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
