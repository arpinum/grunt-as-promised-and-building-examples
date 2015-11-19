'use strict';

var gap = require('grunt-as-promised');
var shell = require('building').shell;

module.exports = function (grunt) {
  gap.registerTask(grunt, 'eslint', function () {
    return shell.execute('eslint', ['.'], {resolveLocalBin: true});
  });

  gap.registerTask(grunt, 'mocha', function () {
    return shell.execute('mocha', ['lib'], {resolveLocalBin: true});
  });

  grunt.registerTask('default', ['eslint', 'mocha']);
};
