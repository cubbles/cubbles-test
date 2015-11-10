/*jshint node: true */

'use strict';
var path = require('path');
var chalk = require('chalk');
var fsExtra = require('fs.extra');
var schemaPath = require.resolve('webpackage-document-api/public/lib/jsonSchema/manifestWebpackage-8.0.0.schema');
var schema = JSON.parse(require('fs').readFileSync(schemaPath));

module.exports = function(grunt) {

    var regexLib = {
        packageName: new RegExp(schema.properties.name.pattern),
        packageGroupId: new RegExp(schema.properties.groupId.pattern),
        personName: new RegExp(schema.definitions.person.properties.name.pattern),
        personEmail: new RegExp(schema.definitions.person.properties.email.pattern)
    };
    return {
        tasks: {
            prompt: {
                createWebPackage: {
                    options: {
                        questions: [
                            {
                                config: 'wpAuthorName',
                                type: 'input',
                                message: 'Your name (as the author of the package):',
                                validate: function(input) {
                                    if (!regexLib.personName.test(input)) {
                                        return 'Please provide a valid value like \'John Doe\' (regex=' +
                                            regexLib.personName + ').\n';
                                    }
                                    return true;
                                }
                            },
                            {
                                config: 'wpAuthorEmail',
                                type: 'input',
                                message: 'Your eMail:',
                                validate: function(input) {
                                    if (!regexLib.personEmail.test(input)) {
                                        return 'Please provide a valid value like \'john.doe@email.com\' (regex=' +
                                            regexLib.personEmail + ').\n';
                                    }
                                    return true;
                                }
                            },
                            {
                                config: 'wpGroupId',
                                type: 'input',
                                message: 'WebPackage groupId (expected to start with your reversed ' +
                                'mail-domain OR keep it empty):',
                                validate: function(input) {
                                    if (input.length === 0) {
                                        return true;
                                    }
                                    if (!regexLib.packageGroupId.test(input)) {
                                        return 'Please provide a valid value like \'my.domain\' (regex=' +
                                            regexLib.packageGroupId + ').\n';
                                    }
                                    return true;
                                }
                            },
                            {
                                config: 'wpName',
                                type: 'input',
                                message: 'WebPackage name (e.g. \'my-package\'):',
                                validate: function(input) {
                                    if (!regexLib.packageName.test(input)) {
                                        return 'Please provide a valid value like \'my-super-package\' (regex=' +
                                            regexLib.packageName + ').\n';
                                    }
                                    return true;
                                }
                            }
                        ],
                        then: function(results, done) {
                            /*
                             * 1) copy the webpackage template (later the could be one of some predefined templates)
                             * 2) rename template-values
                             */

                            // copy webpackage-template
                            // @see https://www.npmjs.com/package/fs.extra
                            var wpCommonName = results.wpGroupId ? results.wpGroupId + '.' + results.wpName :
                                               results.wpName;
                            var src = './templates/webpackage';
                            var dest = path.join(grunt.config.get('workspacePath'), wpCommonName);
                            fsExtra.copyRecursive(src, dest, function(err) {
                                if (err) {
                                    grunt.fail.fatal('Failed to copy \'' + src + '\' to \'' + dest + '\' (' +
                                        err.message + ')');
                                    return;
                                }
                                grunt.log.writeln(chalk.green('Successfully copied \'' + src + '\' to \'' + dest +
                                    '\''));

                                // update manifest.webpackage
                                var manifestFilePath = path.join(dest, 'manifest.webpackage');
                                var manifestJSON = grunt.file.readJSON(manifestFilePath);
                                manifestJSON.name = results.wpName;
                                manifestJSON.groupId = results.wpGroupId;
                                manifestJSON.author.name = results.wpAuthorName;
                                manifestJSON.author.email = results.wpAuthorEmail;
                                grunt.file.write(manifestFilePath, JSON.stringify(manifestJSON, null, 2));

                                // update workspace-config
                                var workspaceConfigJSON = grunt.config.get('workspaceConfig');
                                workspaceConfigJSON.activeWebPackage = wpCommonName;
                                grunt.file.write(grunt.config.get('workspaceConfigPath'),
                                    JSON.stringify(workspaceConfigJSON, null, 2));

                                // now signal done
                                done();
                            });
                            return true;
                        }
                    }
                }
            }
        }
    };
};
