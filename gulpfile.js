const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const del = require('del');

const config = {
  src: 'src/',
  dist: 'dist'
};

gulp.task('clear:dist', () => {
  return del(['dist']);
});

gulp.task('build', () => {
  return gulp.src(`${config.src}*.js`)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(config.dist))
});

gulp.task('copy', () => {
  return gulp.src(`${config.src}*.json`)
    .pipe(gulp.dest(config.dist))
});

gulp.task('default', ['clear:dist', 'build', 'copy']);