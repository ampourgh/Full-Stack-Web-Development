// Recommending for running on a strict interpretation of JavaScript
'use strict';

// Best practice to name the variable after the module
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();


/*

TEMPLATE FOR FUNCTION

gulp.task('name', function() {
  return gulp.src('source-folder')
    .pipe(function)
    .pipe(anotherFunction)
    .pipe(gulp.dest('destination-folder'))
})

SYNTACTICAL DECREMENTATION FROM GULP v<4.0 to v4

v<4.0:
gulp.task('a', ['b', 'c'], function () { // do something })

v4.0
var a = function () { // do some stuff }
gulp.task('a', gulp.series(gulp.parallel(b, c), a))
*/

// No need to F5
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
	})
});

// SCSS to CSS converter
gulp.task('css', function() {
  // the asterisk to the extension is called gulp's glob method
  // the first 2 asterisks are there for initialization
  // the last 1 is for the source map writing itself
	return gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream())
});

// Gulp's default does not require a parameter in Git
// follow up line is an array of dependencies that the function will process
// the function itself has no parameters
var defaultFucntion = function() {
	gulp.watch('src/sass/**/*.scss', ['css']);
	gulp.watch('src/**/*.+(html|js)', ['copy']);
}

gulp.task('default', gulp.series(gulp.parallel('browserSync', 'css'), defaultFucntion));

// Suggested on JavaScript imports for reducing time in Production
// replace imported js scripts with the following: <script src="js/app.js"></script>
gulp.task("concatScripts", function() {

	gulp.src([
		'js/zepto.min.js',
		'js/main.js'
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest("js"));

})

gulp.task("minifyScripts", function() {

	gulp.src([
		'js/apps.js',
	])
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest("js"));

});

// pushing images from src to dist
gulp.task('images', function(){
	return gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

// wildcard source copy
gulp.task('copy', function() {
	return gulp.src('src/**/*.+(html|js)')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream())
});
