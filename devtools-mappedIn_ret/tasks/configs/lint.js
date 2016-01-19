/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
    jshint: {
        utils: {
            options: {
                jshintrc: '<%= param.src %>/.jshintrc'
            },
            src: [
                '*.js',
                'tasks/**/*.js'
            ]
        },
        client: {
            options: {
                jshintrc: '<%= param.src %>/.jshintrc',
            },
            src: [
                '<%= param.src %>/**/*.js',
                '!<%= param.src %>/**/vendor/**',
                '!<%= param.src %>/**/bower_components/**',
                '!<%= param.src %>/**/test-results/**'
            ]
        }
    },
    jscs: { // exclude list defined in .jscsrc
        utils: {
            options: {
                config: '.jscsrc'
            },
            src: [
                '<%= param.src %>*.js',
                'tasks/**/*.js'
            ]
        },
        client: {
            options: {
                config: '<%= param.src %>/.jscsrc'
            },
            src: [
                '<%= param.src %>/**/*.js',
                '!<%= param.src %>/**/vendor/**',
                '!<%= param.src %>/**/test-results/**',
                '!<%= param.src %>/**/bower_components/**'
            ]
        }
    },
    jsonlint: {
        files: {
            src: [
                '<%= param.src %>/manifest.webpackage',
                '<%= param.src %>/**/*.json'
            ]
        }
    },
    csslint: {
        options: {
            csslintrc: '.csslintrc'
        },
        strict: { // attach exclude file with prefix '!', ex: ![path]/main.css
            src: ['<%= param.src %>/**/*.css', '!<%= param.src %>/**/vendor/**', '!<%= param.src %>/**/test-results/**']
        }
    }

};
