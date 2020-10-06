const mix = require('laravel-mix');
require('laravel-mix-eslint');

mix
  .js('./src/js/app.js', './dist/js').eslint()
  .postCss('./src/css/style.css', './dist/css/style.css', [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({
      features: {
        // enable nesting
        'nesting-rules': true,
      },
    })
  ])
  .copy('src/*.html', 'dist')
  .copyDirectory('src/img', 'dist/img')
  .browserSync({
    proxy: false,
    server: 'dist',
    files: [
      'dist/**/*.{css,js,html,php,jpg,jpeg,png,gif,svg}',
    ]
  })
  .options({
    processCssUrls: false,
    terser: {
      extractComments: false, // Stop Mix from generating license file
    }
  })

if (mix.inProduction()) {
  mix
    .options({
      cssNano: {
        // discardComments: {removeAll: true},
      }
    });
}
