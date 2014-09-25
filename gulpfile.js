(function() {
"use strict";

var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    ts    = require('gulp-typescript'),
    sass  = require('gulp-ruby-sass'),
    karma = require('karma').server;



// --------------- PATHS --------------- //
var inputs = {
  scss: 'Q3/src/scss/*.scss',
  spec: 'Q3/test/spec/*-spec.js',
  ts:   'Q3/src/ts/*.ts'
};

var outputs = {
  js:   'Q3/app/js',
  scss: 'Q3/app/scss'
};



// --------------- TASKS --------------- //
gulp.task('karma', karmaFn);
gulp.task('scss', scssFn);
gulp.task('ts', tsFn);
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


function tsFn () {
  gulp.src(inputs.ts)
      .pipe(ts())
      .on('error', errorFn)
      .pipe(gulp.dest(outputs.js));
}


function watchFn () {
  gutil.log(gutil.colors.yellow('Watching...'));
  gulp.watch(inputs.ts, ['ts']);
}



// --------------- ERROR HANDLING --------------- //
function errorFn (error) {
  if (error) {
    gutil.beep();
    gutil.log(gutil.colors.red(error));
  }
}
})(); // IIFE
