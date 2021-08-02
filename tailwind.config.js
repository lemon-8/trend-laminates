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
        textColor: '#363636',
        whiteSmoke: '#F5F5F5',
        carousel: '#DCECF1',
        hr: '#7BB8CB',
        testimonial: '#91C4D4',
      },
      boxShadow:{
        touch: "inset 0 0 0 #000",
        touch1: "inset 192px 0 0 #000",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
