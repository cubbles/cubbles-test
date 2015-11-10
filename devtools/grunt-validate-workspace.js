'use strict';
var fs = require('fs');

module.exports = function(grunt, workspacePath) {
    var workspaceConfigFile = workspacePath + '.workspace';
    if (!grunt.file.isFile(workspaceConfigFile)) {
        grunt.fail.fatal('Expected file \'' + workspaceConfigFile +
            '\' to be found. We recommend to use the generator to scaffold a valid project-structure.');
    }

    console.log('workspaceConfigFile found');
    /*
     * read workspaceConfigFile -file and validate content
     */
    var workspaceConfig = grunt.file.readJSON(workspaceConfigFile);
    //var activeWP = workspaceConfig.activeWebPackage;
    if (('activeWebPackage' in workspaceConfig) && typeof workspaceConfig.activeWebPackage === 'string' &&
        workspaceConfig.activeWebPackage.length > 0) {
        grunt.log.subhead('Currently mapped WebPackage: ' + workspaceConfig.activeWebPackage + ' (@see ' +
            workspaceConfigFile + ')');
    } else {
        grunt.log.warn('Currently there is NO active WebPackage configured. Please check \'' + workspaceConfigFile +
            '\'');
    }

    var activeWebPackage = workspaceConfig.activeWebPackage;
    // does the mapped folder exist?
    if (!activeWebPackage || !grunt.file.isDir(workspacePath + activeWebPackage)) {
        grunt.log.error('Mapped folder does NOT exist. Please check \'' + workspaceConfigFile + '\'');
        return;
    }
    // does the manifest.webpackage file has corresponding values for groupId and name?
    var manifestFilePath = workspacePath + activeWebPackage + '/manifest.webpackage';
    if (!grunt.file.isFile(manifestFilePath)) {
        grunt.log.error('File \'' + manifestFilePath + '\' does NOT exist. Please check your WebPackage.');
        return;
    }
    //
    var manifest = grunt.file.readJSON(manifestFilePath);
    var webpackageCommonName = manifest.groupId ? manifest.groupId + '.' + manifest.name : manifest.name;
    if (activeWebPackage != webpackageCommonName) {
        grunt.log.error('Expected the folder to be named \'' + webpackageCommonName + '\'. Running a fix ...');
        // rename the folder
        fs.renameSync(workspacePath + activeWebPackage, workspacePath + webpackageCommonName, function(err) {
            if (err) {
                grunt.log.error();
                grunt.verbose.error();
                grunt.fail.warn('Fix operation failed. Please do update the folder name to \'' + webpackageCommonName +
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
};
