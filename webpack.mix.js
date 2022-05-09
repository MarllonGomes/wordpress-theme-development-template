const mix = require('laravel-mix');
require('laravel-mix-purgecss');
const path = require('path');

mix.js('assets/js/app.js', 'wptheme/assets/app.js')
    .sass('assets/scss/app.scss', 'wptheme/assets/app.css')
    .copyDirectory('assets/images', 'wptheme/assets/images')
    .copyDirectory('assets/fonts', 'wptheme/assets/fonts')
    .purgeCss({
        content: [
            path.join(__dirname, 'wptheme', '**/*.php'),
            path.join(__dirname,'wptheme', 'assets/js/*.js'),
        ],
    });


mix.browserSync({
    proxy: "localhost",
    watch: true,
    files: [
        'assets/**/*',
        'wptheme/**/*'
    ]
})