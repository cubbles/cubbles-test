'use strict';
module.exports = function (grunt) {
  grunt.registerTask('_test', 'test)', [
    '_validateSources',
    'wct-test:copy-value-test-compound-obj'
  ]);
};
