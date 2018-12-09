// Recommending for running on a strict interpretation of JavaScript
'use strict';

// Best practice to name the variable after the module
var gulp = require('gulp'),
 		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
 		sass = require('gulp-sass'),
 		sourcemaps = require('gulp-sourcemaps'),
 		autoprefixer = require('gulp-autoprefixer'),
 		imagemin = require('gulp-imagemin'),
 		browserSync = require('browser-sync').create();

/*

TEMPLATE FOR FUNCTION

gulp.task('name', function() {
  return gulp.src('source-folder')
    .pipe(function)
    .pipe(anotherFunction)
    .pipe(gulp.dest('destination-folder'))
})

*/

// Gulp's default does not require a parameter in Git
// follow up line is an array of dependencies that the function will process
// the function itself has no parameters
gulp.task('default', ['browserSync', 'css'], function(){
	gulp.watch('src/sass/**/*.scss', ['css']);
	gulp.watch('src/**/*.+(html|js)', ['copy']);
});

// Suggested on JavaScript imports for reducing time in Production
// replace imported js scripts with the following: <script src="js/app.js"></script>
gulp.task("concatScripts", function() {

	gulp.src([
		'js/zepto.min.js',
		'js/main.js'
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest("js"));

});

gulp.task("minifyScripts", function() {

	gulp.src([
		'js/apps.js',
	])
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest("js"));

});

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

gulp.task('images', function(){
	return gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

gulp.task('copy', function() {
	return gulp.src('src/**/*.+(html|js)')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream())
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
	})
});
