var gulp                = require("gulp"),
  browserSync           = require("browser-sync"),
  sass                  = require("gulp-sass"),
  plumber               = require("gulp-plumber"),
  gutil                 = require("gulp-util"),
  concat                = require("gulp-concat");

gulp.task('browserSync', gulp.series( (done) => {
  browserSync.init({
  server: "dist",
  notify: false
  });

  done();
}));

gulp.task('css', gulp.series( () => {
  return (
    gulp.src('src/sass/**/*.scss')
      .pipe(plumber(function(error) {
        gutil.log(error.message);
        this.emit('end');
      }))
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.reload({stream:true}))
    );
}));

gulp.task('copy', gulp.series( () => {
	return (
    gulp.src('src/**/*.+(html|js)')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream())
  );
}));



gulp.task("watch", gulp.series(['browserSync'], function () {
  gulp.watch("src/sass/**/*.scss", gulp.parallel(["css"]))
	gulp.watch("src/**/*.+(html|js)", gulp.parallel(["copy"]))
}))
