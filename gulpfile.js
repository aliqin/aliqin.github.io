const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
// const browserSync = require('browser-sync').create()

// browserify + babel => es6 in browser
gulp.task('js', () => {
  const browserify = require('browserify')
  const source = require('vinyl-source-stream')
  const buffer = require('vinyl-buffer')
  return browserify('src/js/index.js')
      .transform('babelify')
      .bundle()
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('static/js'))
      // .pipe(browserSync.stream())
})

// postcss => css
gulp.task('css', () => {
  const postcss = require('gulp-postcss')
  const autoprefixer = require('autoprefixer')
  const precss = require('precss')
  const concat = require('gulp-concat')
  const minifyCss = require('gulp-minify-css')
  return gulp.src('src/css/*.css')
    .pipe(postcss([autoprefixer, precss]))
    .pipe(concat('screen.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('static/css'))
    // .pipe(browserSync.stream())
})

// browserSync server
gulp.task('server', () => {
  // browserSync.init({
  //   server: './',
  //   open: false
  // })

  gulp.watch(['./src/**/*.js'], ['js'])
  gulp.watch(['./src/**/*.css'], ['css'])
  // gulp.watch(['./src/**/*.html']).on('change', browserSync.reload)
})

gulp.task('build', ['js', 'css'])
// gulp.task('test', [''])

gulp.task('publish', () => {
  var ghpages = require('gh-pages')
  var path = require('path')
  ghpages.publish(path.join(__dirname, './'), {
    branch: 'master',
    message: '发布blog中...',
    src:'public/**/*',
    logger: function(message) {
      console.log(message)
    }
  }, function(err) {
    console.log(err || 'blog部署成功！')
  });

})
