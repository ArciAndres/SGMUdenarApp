// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var jade = require('gulp-jade');

// Task
gulp.task('default', function () {
    // listen for changes
    livereload.listen();
    // configure nodemon
    nodemon({
        // the script to run the app
        script: './bin/www',
        ext: 'js'
    }).on('restart', function () {
        // when the app has restarted, run livereload.
        gulp.src('./bin/www')
            .pipe(livereload())
            .pipe(notify('Reloading page, please wait...'));
        gulp.watch('./views/*.jade', function (event) {
            gulp.src(event.path)
                .pipe(jade())
                .pipe(gulp.dest('./html'))
                .pipe(livereload())
        })
        gulp.watch('./views/*/*.jade', function (event) {
            gulp.src(event.path)
                .pipe(jade())
                .pipe(gulp.dest('./html'))
                .pipe(livereload())
        })
        gulp.watch('./public/stylesheets/*.css', function (event) {
            gulp.src(event.path)
                .pipe(livereload())
        })
    })
})

