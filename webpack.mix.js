const mix = require('laravel-mix');
const del = require('del');
require('laravel-mix-eslint');

mix

  // JS
  .js('./src/js/app.js', './dist/js').eslint()

  // CSS
  // We import and compile large "taiwlindcss/utilities" in a separate file due to slow compilation process.
  // The utility file is rebuilt when something that affects it is changed e.g. the tailwind.config.js
  .postCss('./src/css/tailwind.css', './src/css/compiled-tailwind.css')
  .postCss('./src/css/tailwind-utilities.css', './src/css/compiled-tailwind-utilities.css')

  // CSS
  // Combine and delete temporary compiled CSS files
  .combine([
    './src/css/compiled-tailwind.css',
    './src/css/compiled-tailwind-utilities.css'
  ], './dist/css/style.css').then(() => {
    del('./src/css/compiled-tailwind.css');
    del('./src/css/compiled-tailwind-utilities.css');
  })

  // Options
  .options({
    processCssUrls: false,
    terser: {
      extractComments: false, // Stop Mix from generating license file
    },
    postCss: [
      require('postcss-import'),
      require('tailwindcss')('./tailwind.config.js'),
      require('postcss-preset-env') // includes autoprefixer by default
    ],
  })

  // Copy HTML
  .copy('src/*.html', 'dist')

  // Copy Image directory
  .copyDirectory('src/img', 'dist/img')

  // BrowserSync
  .browserSync({
    proxy: false,
    server: 'dist',
    files: [
      'dist/**/*.{css,js,html,php,jpg,jpeg,png,gif,svg}',
    ]
  })
