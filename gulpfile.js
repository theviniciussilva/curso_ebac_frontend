const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const resultado = require('./source/scripts/resultado');
const uglify = require('gulp-uglify');

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/styles/'));
}
function compilaImagem(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}
function comprimeJs(){
    return gulp.src('./source/scripts/*')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'))
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false}, gulp.series(comprimeJs));
    gulp.watch('./source/images/*',{ignoreInitial: false}, gulp.series(compilaImagem));
}