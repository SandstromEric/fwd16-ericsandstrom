var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Requiring autoprefixer
var autoprefixer = require('gulp-autoprefixer');
// Requiring Sourcemaps
var sourcemaps = require('gulp-sourcemaps');
//Auto refresh browser on file save
var browserSync = require('browser-sync');
// Requiring merge stream
var merge = require('merge-stream');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.+(scss|sass)', ['sass']);
  gulp.watch('app/index.html', browserSync.reload);
});

gulp.task('prod', function(){

  var html=gulp.src('app/*.html')
  .pipe(gulp.dest('dist'))

  var css=gulp.src('app/css/*.css')
  .pipe(gulp.dest('dist/css'))

  var img=gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(gulp.dest('dist/images'))

  var js=gulp.src('app/js/*.js')
  .pipe(gulp.dest('dist/js'))

  return merge(html, css, img, js);
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.+(scss|sass)') // Gets all files ending with .scss or .sass in app/scss
  .pipe(sourcemaps.init()) // Initialize sourcemap plugin
  .pipe(sass()) // Passes it through a gulp-sass task
  .pipe(autoprefixer()) // Passess it through gulp-autoprefixer
  .pipe(sourcemaps.write()) // Writing sourcemaps
  .pipe(gulp.dest('app/css')) // Outputs it in the css folder
  // Reloading the stream
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('default', ['sass', 'watch', 'prod']);
