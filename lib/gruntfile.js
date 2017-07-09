module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      files: {
        src: '../javascripts/**/*.js',
        dest: './dist/app.js'
      },
      options: {
        browserifyOptions: {
          paths: [
            "./node_modules"
            ]
          }
      }
    },
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
        predef: ["document", "console", "$"],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      }
    },
    sass: {
      dist: {
        files: {
          '../main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['sass', 'jshint', 'browserify', 'watch']);
};