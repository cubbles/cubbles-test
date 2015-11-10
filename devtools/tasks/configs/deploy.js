/*jshint node: true */
/*global module */
'use strict';
var path = require('path');

module.exports = function(grunt) {
    return {
        tasks: {
            exec: {
                deployLocal: {
                    cmd: path.relative('', 'node_modules/.bin/webpackage-uploader') +
                    ' tasks/configs/deployLocal-config.json'
                },
                deployIntegration: {
                    cmd: path.relative('', 'node_modules/.bin/webpackage-uploader') +
                    ' tasks/configs/deployIntegration-config.json'
                },
                deployCustom: {
                    cmd: path.relative('', 'node_modules/.bin/webpackage-uploader') +
                    ' tasks/configs/deployCustom-config.json'
                },
                validateWebpackage: {
                    cmd: path.relative('', 'node_modules/.bin/validate-webpackage') +
                    ' tasks/configs/deployIntegration-config.json'
                }
            },
            prompt: {
                deployCustom: {
                    options: {
                        questions: [
                            {
                                config: 'deployBaseUrl',
                                type: 'input',
                                message: 'BaseUrl: ',
                                default: function() {
                                    var configFile = 'tasks/configs/deployCustom-config.json';
                                    var deployConfig = grunt.file.readJSON(configFile);
                                    var urlWithCredentials = deployConfig.couchdb.url;
                                    var credentials = urlWithCredentials.replace(/^https?:\/\//, '').replace(/@.*/, '');
                                    var strippedUrl = urlWithCredentials.replace(new RegExp(credentials + '@'), '');
                                    //
                                    var deployCustomValueMap = {};
                                    deployCustomValueMap.configFile = configFile;
                                    deployCustomValueMap.deployConfig = deployConfig;
                                    deployCustomValueMap.credentials = credentials;
                                    grunt.config.set('deployCustomValueMap', deployCustomValueMap);
                                    //
                                    return strippedUrl;
                                },
                                validate: function(input) {
                                    // for the url-regex @see https://mathiasbynens.be/demo/url-regex
                                    var urlRegexByStephanhay = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
                                    if (!urlRegexByStephanhay.test(input)) {
                                        return 'Please provide a url with a valid pattern (regex=' +
                                            urlRegexByStephanhay + ').\n';
                                    }
                                    return true;
                                }
                            }
                        ],
                        then: function(results, done) {
                            /*
                             * write deployConfig back to file
                             */
                            var deployCustomValueMap = grunt.config.get('deployCustomValueMap');
                            //grunt.log.writeln(JSON.stringify(deployCustomValueMap));
                            //
                            //grunt.log.writeln(JSON.stringify(results));
                            var urlWithoutCredentials = results.deployBaseUrl;
                            deployCustomValueMap.deployConfig.couchdb.url =
                                urlWithoutCredentials.replace(/(^https?:\/\/)/,
                                    '$1' + deployCustomValueMap.credentials + '@');

                            // now write file
                            grunt.file.write(deployCustomValueMap.configFile,
                                JSON.stringify(deployCustomValueMap.deployConfig, null, 2));
                            done();
                            return true;
                        }
                    }
                }
            }
        }
    };
};
