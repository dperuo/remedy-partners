(function() {
"use strict";

var gulp   = require('gulp'),
    gutil  = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-ruby-sass'),
    karma  = require('karma').server;



// --------------- PATHS --------------- //
var inputs = {
  scss: 'Q3/src/scss/*.scss',
  spec: 'Q3/test/spec/*-spec.js',
  js:   'Q3/src/js/*.js'
};

var outputs = {
  js:   'Q3/app/js',
  scss: 'Q3/app/scss'
};



// --------------- TASKS --------------- //
gulp.task('karma', karmaFn);
gulp.task('scss', scssFn);
gulp.task('js', jsFn);
gulp.task('watch', watchFn);
gulp.task('default', ['karma', 'watch']);



// --------------- TASK FUNCTIONS --------------- //
function karmaFn (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    // singleRun: true
  }, done);
}


function scssFn () {
  gulp.src(inputs.scss)
      // .pipe(sass({style: 'compressed', noCache: true}))
      .pipe(sass({style: 'compressed'}))
      .on('error', errorFn)
      .pipe(gulp.dest(outputs.css));
}


function jsFn () {
  gulp.src(inputs.js)
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(jshint.reporter('fail'))
      .on('error', errorFn)
      .pipe(gulp.dest(outputs.js));
}


function watchFn () {
  gutil.log(gutil.colors.yellow('Watching...'));
  gulp.watch(inputs.js, ['js']);
}



// --------------- ERROR HANDLING --------------- //
function errorFn (error) {
  if (error) {
    gutil.beep();
    gutil.log(gutil.colors.red(error));
  }
}
})(); // IIFE
