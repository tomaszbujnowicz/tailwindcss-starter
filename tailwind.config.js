/**
 * Docs
 * https://tailwindcss.com/docs/configuration
 *
 * Default configuration
 * https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{html,php,liquid,js}',
    ],
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [],
}
