const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      cacheDir: 'build/bundled',
      branch: 'gh-pages',
      remoteUrl: 'https://github.com/GDG-Caceres/git-codelab'
    }));
});
