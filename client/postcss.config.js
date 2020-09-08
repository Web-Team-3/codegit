
const tailwindcss = require('tailwindcss');
module.exports = {
    purge: [],
    theme: {
      extend: {
        colors: {
          blue: {
              1000:'#366D93',
          },
          indigo: {
              1000:'#1D2D50',
          },
          purple: {
              1000:'#133B5C',
          },
          gray: {
              1000:'#06151F',
          },
        },
      },
    },
    variants: {},
    plugins: [
      tailwindcss('./tailwind.js'),
      require('autoprefixer'),
    ],
  }
  













/*const tailwindcss = require('tailwindcss');

module.exports = {
    extend: {
        colors: {
          blue: {
              1000:'#366D93',
          },
          indigo: {
              1000:'#1D2D50',
          },
          purple: {
              1000:'#133B5C',
          },
          gray: {
              1000:'#06151F',
          },
        },
      },
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
}*/