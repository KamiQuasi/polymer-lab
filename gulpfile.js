'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', [], function() {
  browserSync({
    notify: false,
    port: 8080,
    server: {
      baseDir: ['app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch(['app/**/*.html'], reload);

});
