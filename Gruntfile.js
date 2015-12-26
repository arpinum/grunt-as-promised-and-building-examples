'use strict';

var gap = require('grunt-as-promised');
var shell = require('building').shell;

module.exports = function (grunt) {
  gap.configure(grunt);

  grunt.registerPromiseTask('eslint', function () {
    return shell.executeLocal('eslint', ['.']);
  });

  grunt.registerPromiseTask('mocha', function () {
    return shell.executeLocal('mocha', ['lib']);
  });

  grunt.registerTask('default', ['eslint', 'mocha']);
};
