'use strict';
var fs = require('fs');

module.exports = function(grunt, workspacePath) {
    var workspaceConfigFile = workspacePath + '.workspace';
    grunt.verbose.writeln('validate: ' + workspaceConfigFile)
    if (!grunt.file.isFile(workspaceConfigFile)) {
        grunt.verbose.writeln('Did NOT found ' + workspaceConfigFile);
        grunt.log.writeln('Creating file \'' + workspaceConfigFile + '\' ... ');
        (function() {
            var workspaceConfigTemplate = {
                activeWebPackage: ""
            };
            grunt.file.write(workspaceConfigFile, JSON.stringify(workspaceConfigTemplate, null, 2));
            grunt.log.writeln('Done.');
        })();
    } else {
        grunt.verbose.writeln('Found ' + workspaceConfigFile);
    }
    /*
     * read workspaceConfigFile -file and validate content
     */
    var workspaceConfig = grunt.file.readJSON(workspaceConfigFile);
    var activeWebpackageName, activeWebpackageExists;
    if (('activeWebPackage' in workspaceConfig) && typeof workspaceConfig.activeWebPackage === 'string' &&
        workspaceConfig.activeWebPackage.length > 0) {
        activeWebpackageName = workspaceConfig.activeWebPackage;
        grunt.log.subhead('Currently mapped Webpackage: ' + activeWebpackageName + ' (@see ' +
            workspaceConfigFile + ')');
    } else {
        grunt.log.warn('Currently there is NO active Webpackage configured. Please check \'' + workspaceConfigFile +
            '\'');
    }

    // does the mapped folder exist?
    if(activeWebpackageName) {
        if (grunt.file.isDir(workspacePath + activeWebpackageName)) {
            activeWebpackageExists = true;
        } else {
            grunt.log.error('Mapped folder does NOT exist. Please check \'' + workspaceConfigFile + '\'');
            return;
        }
        // does the manifest.webpackage file has corresponding values for groupId and name?
        var manifestFilePath = workspacePath + activeWebpackageName + '/manifest.webpackage';
        if (!grunt.file.isFile(manifestFilePath)) {
            grunt.log.error('File \'' + manifestFilePath + '\' does NOT exist. Please check your WebPackage.');
            return;
        }
        //
        var manifest = grunt.file.readJSON(manifestFilePath);
        var webpackageCommonName = manifest.groupId ? manifest.groupId + '.' + manifest.name : manifest.name;
        if (activeWebpackageName != webpackageCommonName) {
            grunt.log.error('Expected the folder to be named \'' + webpackageCommonName + '\'. Running a fix ...');
            // rename the folder
            fs.renameSync(workspacePath + activeWebpackageName, workspacePath + webpackageCommonName, function(err) {
                if (err) {
                    grunt.log.error();
                    grunt.verbose.error();
                    grunt.fail.warn(
                        'Fix operation failed. Please do update the folder name to \'' + webpackageCommonName +
                        '\' manually.');
                }
            });
            // update .workspace file to point to the new folder name
            workspaceConfig.activeWebPackage = webpackageCommonName;
            grunt.file.write(workspaceConfigFile, JSON.stringify(workspaceConfig, null, 2));
            // TODO: Create 'bower-install' task
            // TODO: Update 'workspace/.bowerrc' File
            //
            grunt.log.error('Fixed.');
        }
    }
};
