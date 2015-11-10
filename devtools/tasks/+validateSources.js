module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('+validateSources', 'validate js and css', [
        'jshint', 'jscs', 'jsonlint', 'csslint'
    ]);
};
