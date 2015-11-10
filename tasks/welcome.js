/**
 * Sample task to print welcome ASCII figure
 */
module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('welcome', 'Shows the Cubixx grunt-logo' , function() {
        grunt.log.writeln(' _________           ________   _________');
        grunt.log.writeln('(  ____  \\|\\     /|(  ___  \\ \\__   __/|\\     /||\\     /|');
        grunt.log.writeln('| (    \\\/| )   ( || (   ) )   ) (   ( \\   / )( \\   / )');
        grunt.log.writeln('| |      | |   | || (__/ /    | |    \\ (_) /  \\ (_) /');
        grunt.log.writeln('| |      | |   | ||  __ (     | |     ) _ (    ) _ (');
        grunt.log.writeln('| |      | |   | || (  \\ \\    | |    / ( ) \\  / ( ) \\ ');
        grunt.log.writeln('| (____/\\| (___) || )___) )___) (___( /   \\ )( /   \\ )');
        grunt.log.writeln('(_______/(_______)|/ \\___/ \\_______/|/     \\||/     \\|');
        grunt.log.writeln('');
    });
};
