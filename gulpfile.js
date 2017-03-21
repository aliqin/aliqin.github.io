const gulp = require('gulp')
const fs = require('fs')
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


gulp.task('push', () => {
  const publicDir = './publicx/'
  fs.readdir(publicDir, (err, files) => {
    if (err) {
      fs.mkdir(publicDir, 0777, (err) =>{
        if (err) throw err
        initGitRepo()
      })
    } else {
      initGitRepo()
    }
  })

  function initGitRepo() {
    const git = require('simple-git')(publicDir)
    
    git.outputHandler((command, stdout, stderr) => {
      stdout.pipe(process.stdout)
      stderr.pipe(process.stderr)
    })
    .clone('https://github.com/aliqin/aliqin.github.io.git', './',['-b', 'master'], (res) => {
      console.log('success cloned!', res)
    })
    console.log('initGitRepo')
  }
})

gulp.task('build', ['js', 'css'])
// gulp.task('test', [''])

gulp.task('deploy', () => {
  var ghpages = require('gh-pages')
  var path = require('path')
  ghpages.publish(path.join(__dirname, 'public'), {
    branch: 'master',
    message: '发布blog',
    //add:true,
    src:'**/*',
    logger: function(message) {
      console.log(message)
    }
  }, function(err) {
    console.log(err || 'blog部署成功！')
  });

})
