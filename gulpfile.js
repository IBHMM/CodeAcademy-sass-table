const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const cssnano = require('gulp-cssnano');

function builtStyles() {
    return src('scss/**/*.scss') 
        .pipe(sass())     
        .pipe(dest('css'));
}

function watchTask() {
    watch(['scss/**/*.scss'], builtStyles); 
}

exports.default = series(builtStyles, watchTask);
