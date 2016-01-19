/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {

    htmlmin: {
        dist: {
            files: [
                {
                    expand: true,
                    cwd: '<%= param.src %>',
                    src: ['{,*/}*.html'],
                    dest: '<%= param.dst %>'
                }]
        }
    },
    // Reads HTML for usemin blocks to enable smart builds
    // that automatically concat, minify and revision files.
    // Creates configurations in memory so additional tasks
    // can operate on them
    useminPrepare: {
        options: {
            dest: '<%= param.dst %>'
        },
        html: ['<%= param.build %>/index.html']
    },
    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
        options: {
            assetsDirs: ['<%= param.dst %>'],
            debugInfo: true
        },
        html: ['<%= param.dst %>/{,*/}*.html'],
        css: ['<%= param.dst %>/styles/{,*/}*.css']
    },

    copy: {
        // Copies all files into build directory for vulcanization

        static: {
            files: [
                {
                    /* copy manifests */
                    expand: false,
                    src: '<%= param.src %>/manifest.webapp',
                    dest: '<%= param.dst %>/manifest.webapp'
                },
                {
                    /* copy manifests */
                    expand: false,
                    src: '<%= param.src %>/manifest.component',
                    dest: '<%= param.dst %>/manifest.component'
                },
                {
                    /* copy manifests */
                    expand: false,
                    src: '<%= param.src %>/manifest.webpackage',
                    dest: '<%= param.dst %>/manifest.webpackage'
                },
                /* copy manifests */
                {
                    expand: false,
                    src: '<%= param.src %>/manifest.cubx',
                    dest: '<%= param.dst %>/manifest.cubx'
                },
                {
                    /* copy main.js files */
                    expand: true,
                    cwd: '<%= param.src %>/',
                    src: 'js/main.js',
                    dest: '<%= param.dst %>/'
                },
                {
                    /* copy icons */
                    expand: true,
                    cwd: '<%= param.src %>/',
                    src: 'style/icons/**/*',
                    dest: '<%= param.dst %>/'
                },
                {
                    /* copy images */
                    expand: true,
                    cwd: '<%= param.src %>/',
                    src: 'style/images/**/*',
                    dest: '<%= param.dst %>/'
                },
                {
                    /* copy fonts */
                    expand: true,
                    cwd: '<%= param.src %>/',
                    src: 'style/fonts/**/*',
                    dest: '<%= param.dst %>/'
                },
                {
                    /* copy locales */
                    expand: true,
                    cwd: '<%= param.src %>/',
                    src: 'locales/**/*',
                    dest: '<%= param.dst %>/'
                },
                {
                    /* copy json files */
                    expand: true,
                    cwd: '<%= param.src %>/',
                    src: ['**/*.json', '!**/bower.json', '!**/package.json'],
                    dest: '<%= param.dst %>/'
                }]
        }

    },
    clean: {
        dist: [
            '<%= param.dst %>/', '<%= param.tmp %>/',
            '<%= param.build %>/', '<%= param.pack %>/'],
        docs: ['<%= param.doc %>/'],
        tests: ['<%= param.dst %>/test']
    },
    githooks: {
        all: {
            options: {
                dest: '../.git/hooks'
            },
            'pre-commit': '_validateSources'
        }
    }
};
