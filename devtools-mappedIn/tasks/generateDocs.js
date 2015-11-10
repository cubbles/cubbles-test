module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('generateDocs', 'generate documentation', [
        'clean:docs', '+validateSources', 'prepareJsdoc', 'jsdoc', 'deleteGeneretedJsdocConfig'
    ]);
};
