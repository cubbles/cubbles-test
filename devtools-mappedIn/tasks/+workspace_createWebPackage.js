module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('+createWebpackage', 'Create a new WebPackage.', [
        'prompt:createWebPackage','default'
    ]);
};
