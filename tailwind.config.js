/**
 * Docs
 * https://tailwindcss.com/docs/configuration
 *
 * Default configuration
 * https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    content: [
      'src/**/*.html',
      'src/**/*.php',
      'src/**/*.liquid',
      'src/**/*.js',
    ],
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [],
}
