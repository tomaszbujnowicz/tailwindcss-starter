const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const purgecss = require('laravel-mix-purgecss');

mix
  .js('./src/js/app.js', './dist/js/')
  .postCss('./src/css/style.css', './dist/css/style.css', [
    tailwindcss('./tailwind.config.js'),
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
    .purgeCss({
      folders: ['src'],
    })
    .options({
      cssNano: {
        // discardComments: {removeAll: true},
      }
    });
}