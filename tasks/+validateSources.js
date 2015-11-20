module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('_validateSources', 'validate js and css', [
        'jshint', 'jscs', 'jsonlint', 'csslint'
    ]);
};
