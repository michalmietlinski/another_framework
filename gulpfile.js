'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
prefixer = require('gulp-autoprefixer'),

watch = require('gulp-watch');
    

var path= {
	dist : 'dist/css',
	src : 'src/**/*.scss',
	watch:'src/**/*.scss'

}
gulp.task('watch', function(){
    // watch([path.watch.html], function(event, cb) {
    //     gulp.start('html:build');
    // });
    watch([path.watch], function(event, cb) {
        gulp.start('style');
    });

});


gulp.task('style', function () {
    gulp.src(path.src) 
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist));
});

gulp.task('default', ['watch']);

gulp.task('default', ['style'], function () {
    gulp.watch(path.watch, ['style']);
});