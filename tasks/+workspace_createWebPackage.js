module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('+workspace-createWebPackage', 'Create a new WebPackage.', [
        'prompt:createWebPackage','default'
    ]);
};
