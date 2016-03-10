'use strict';

// the gulp task runner
var gulp = require('gulp');

// Gulp plugins
var $ = require('gulp-load-plugins')();

// NPM modules
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync');

// Main tasks

gulp.task('default',['build']);

gulp.task('build');
gulp.task('serve',['inject'], serveTask);
gulp.task('test');

// Task runner

function serveTask() {
    browserSync.init({
      server: {
        baseDir: "./src",
        routes: {
          "/bower_components": "bower_components"
        }
      }
    })
}

// Secondary tasks

gulp.task('inject', function () {
    
    var appScripts = gulp.src(['./src/scripts/**/*.js']).pipe($.angularFilesort());
    
    return gulp.src('./src/index.html')
        .pipe(wiredep({ ignorePath: '../' }))
        .pipe($.inject(appScripts,{ ignorePath: 'src/', addRootSlash: false }))
        .pipe(gulp.dest('./src'));
});
