module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('pack', 'Pack your files for distribution (internally used for deploy* tasks)', [
        'clean:pack',
        //   'optimize',
        'copy:pack'
    ]);

    // intemediate task to optimize resources
    /*    grunt.registerTask('optimize', [
     'copy:build',
     'useminPrepare',
     'concat:generated',
     'cssmin:generated',
     'uglify:generated',
     'htmlmin',
     'usemin'
     ]);
     */
};
