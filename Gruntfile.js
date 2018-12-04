// Use "grunt --help" to list the available tasks

module.exports = function(grunt) {
  grunt.initConfig({
      sass: {
          // this is the "dev" Sass config used with "grunt watch" command
          dev: {
              options: {
                  style: 'expanded',
              },
              files: {
                  // the first path is the output and the second is the input
                  'assets/css/style.css': 'sass/style.scss'
              }
          },
          // this is the "production" Sass config used with the "grunt default" command
          dist: {
              options: {
                  style: 'compressed',
              },
              files: {
                  'assets/css/style.css': 'sass/style.scss'
              }
          }
      },
      // configure the "grunt watch" task
      watch: {
          sass: {
              files: ['sass/*.scss', 'sass/**/*.scss',],
              tasks: ['sass:dev']
          }
      },
      connect: {
        server: {
            options: {
                port: 8001,
                base: '.', 
                useAvailablePort: true,
                keepalive: true,
                 open: {
                    target: 'http://localhost:8001',
                    }
                }
            }
        }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  // "grunt" is the same as running "grunt sass:dist".
  grunt.registerTask('default', ['sass:dist']);
  grunt.registerTask('dev', ['sass:dev']);
};