'use strict';

// the gulp task runner
var gulp = require('gulp');

// Gulp plugins
var $ = require('gulp-load-plugins')();

// NPM modules
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();

// Paths
var paths = {
  styles: {
    vanilla: 'src/styles/**/*.css'
  },
  scripts: {
    vanilla: 'src/scripts/**/*.js'
  }
};

// Main tasks

gulp.task('default',['build']);
gulp.task('dev',['build'], serveTask);

gulp.task('build',$.sequence('deps', 'injectStyles', 'injectScripts'));

// Task runner

function serveTask() {
    browserSync.init({
      server: {
        baseDir: 'src',
        routes: {
          '/bower_components': 'bower_components'
        }
      },
      files: [paths.styles.vanilla]
    });

    $.watch('bower.json',function () {
        gulp.start('deps');
    });
    gulp.watch([paths.scripts.vanilla], ['injectScripts']);
}

// Secondary tasks

gulp.task('deps', function() {
  return gulp.src('./src/index.html')
    .pipe(wiredep({ ignorePath: '../' }))
    .pipe(gulp.dest('./src'))
    .pipe(browserSync.stream());
});

gulp.task('injectStyles', function () {

    var appStyles = gulp.src([paths.styles.vanilla], {read: false});

    return gulp.src('./src/index.html')
        .pipe($.inject(appStyles,{ ignorePath: 'src/', addRootSlash: false }))
        .pipe(gulp.dest('./src'));
});

gulp.task('injectScripts', function () {

    var appScripts = gulp.src([paths.scripts.vanilla]).pipe($.angularFilesort());

    return gulp.src('./src/index.html')
        .pipe($.inject(appScripts,{ ignorePath: 'src/', addRootSlash: false }))
        .pipe(gulp.dest('./src'))
        .pipe(browserSync.stream());
});
