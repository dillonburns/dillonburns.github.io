var gulp = require('gulp');
var gulp = require('gulp-help')(require('gulp'));
var debug = require('gulp-debug');
var pump = require('pump');
//for scss
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

//for js
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

//browserSync
var browserSync = require('browser-sync');

//file paths
var inputDirectory ='src/';
var outputDirectory = 'dist/';

var paths = {
  scripts:{
      src: inputDirectory+'js/**/*.js',
      dest: outputDirectory+'js'
  },
  styles:{
      src: inputDirectory+'scss/**/*.scss',
      dest: outputDirectory+'styles/'
  } 
};
 
gulp.task('default', ['help'], function () {

});

gulp.task('sass', 'Compiles .scss files to .css', function () {
    return gulp.src(paths.styles.src)
        .pipe(debug({title: 'styles:'}))
        .pipe(sourcemaps.init())
        .pipe(sass().on('Sass Error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
        console.log(path.styles.src);
});

gulp.task('scripts', 'Concatenates and minifies js files', function (cb) {

    pump([
        debug({title: 'scripts:'}),
        gulp.src(paths.scripts.src),
        concat('app.js'),
        gulp.src(paths.scripts.src),
        rename('app.min.js'),
        //uglify(),
        browserSync.stream(),
        gulp.dest(paths.scripts.dest)
      ],
      cb
    );
  /*
    return gulp.src(paths.scripts.src)
        .pipe(debug({title: 'scripts:'}))
        //.pipe(concat('app.js'))
        //.pipe(gulp.src(paths.scripts.src))
        //.pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest))
   */
});

gulp.task('watch', 'Watches files for automatic processing', function () {
  
    gulp.watch(paths.styles.src, ['sass']);
    gulp.watch(paths.scripts.src, ['scripts']);
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(paths.styles.src, ['sass']);
    gulp.watch(paths.scripts.src, ['scripts']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
