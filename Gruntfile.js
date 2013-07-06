module.exports = function(grunt) { 
  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    concat: { 
      js: {
        src: ['lib/**/*.js'],
        dest: 'release/objectify.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask("default", "concat")
};