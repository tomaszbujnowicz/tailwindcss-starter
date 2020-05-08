const mix = require('laravel-mix');

mix
  .js('./src/js/app.js', './dist/js/')
  .postCss('./src/css/style.css', './dist/css/style.css', [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),   
    require('postcss-nested'),
    require('postcss-preset-env')
  ])
  .copy('src/*.html', 'dist')
  .copyDirectory('src/img', 'dist/img')
  .browserSync({
    proxy: false,
    server: 'dist',
    files: [
      'dist/**/*.{css,js,html,php}',
    ]
  })

if (mix.inProduction()) {
  mix
    .options({
      cssNano: {
        // discardComments: {removeAll: true},
      }
    });
}