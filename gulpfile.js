const { series, src, dest } = require('gulp')
const tar = require('gulp-tar')
const uglify = require('gulp-uglify-es').default
const del = require('del')
const rename = require('gulp-rename')
const size = require('gulp-size')

function cleanup() {
  // clean dist
  return del('./dist/**')
}

function buildJs() {
  // tar file
  return src(['./index.js'])
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(size({showFiles: true}))
  .pipe(dest('./dist'))
}

const build = series(
  cleanup,
  buildJs
)

function packup(cb) {
  return src(['./dist/**/*.js', './index.d.ts'])
    .pipe(tar(`uuid-${new Date().getTime()}.tar`))
    .pipe(dest('./dist'))
}

module.exports = {
  cleanup: cleanup,
  packup: packup,
  default: build
}