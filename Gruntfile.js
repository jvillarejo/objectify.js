module.exports = function(grunt) { 
  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    concat: { 
      js: {
        src: ['lib/**/*.js'],
        dest: 'release/objectify.js'
      }
    }, 

    mochaTest: { 
      test: { 
        options: { 
          reporter: 'spec'
        },
        src: ['tests/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask("default", ["concat", "mochaTest"])
};