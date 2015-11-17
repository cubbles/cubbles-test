/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
    availabletasks: {
        tasks: {
            options: {
                filter: 'include',
                tasks: [
                    '+createWebpackage',
                    '+startWebserver',
                    '+webpackage-upload',
                    '+webpackage-validateManifestFile'],
                sort: true
            }
        }
    }
};
