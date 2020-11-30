/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

module.exports = isProd => {
  return {
    prefix: '',
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: {
      enabled: isProd,
      content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
    },
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          white: 'white',
          primary: colors.purple,
          secondary: colors.teal,
          gray: colors.gray,
        },
      },
    },
    plugins: [require('tailwindcss/colors'), require('@tailwindcss/forms')],
  };
};
