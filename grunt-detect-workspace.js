'use strict';
module.exports = function(grunt, workspaceName) {
    var workspacePath = '../' + workspaceName + '/';
    var alternativeWorkspacePath = './' + workspaceName + '/';

    if (grunt.file.isDir(workspacePath)) {
        return workspacePath;
    } else if (grunt.file.isDir(alternativeWorkspacePath)) {
        return alternativeWorkspacePath;
    } else {
        grunt.fail.fatal('Workspace \'' + workspacePath + '\' not found.');
    }
};
