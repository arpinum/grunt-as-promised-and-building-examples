'use strict';

var gap = require('grunt-as-promised');
var shell = require('building').shell;

module.exports = function (grunt) {
  gap.registerTask(grunt, 'jshint', function () {
    return shell.execute('jshint', ['.'], {resolveLocalBin: true});
  });

  gap.registerTask(grunt, 'mocha', function () {
    return shell.execute('mocha', ['lib'], {resolveLocalBin: true});
  });

  grunt.registerTask('default', ['jshint', 'mocha']);
};
