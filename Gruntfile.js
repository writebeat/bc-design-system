module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      patternlab: {
        command: "php core/console --generate --patternsonly",
      },
      server: {
        command: "php core/console --server",
      }
    },
    watch: {
      html: {
        files: [
          'source/_patterns/**/*.mustache',
          'source/_patterns/**/*.md',
          'source/**/*.json',
        ],
        tasks: [
          'shell:patternlab',
        ],
        options: {
          spawn: false,
          livereload: true,
        },
      },
      scripts: {
        files: [
          'source/js/*.js',
        ],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
      css: {
        files: [
          'source/css/*.scss',
          'source/css/scss/*.scss',
          'source/css/scss/**/*.scss',
        ],
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
      json: {
        files: [
          'source/js/json/*.*'
        ],
        tasks: ['copy'],
        options: {
          spawn: false,
          livereload: true,
        }
      },
      mustache: {
        files: [
          'source/_patterns/**/*.mustache'
        ],
        tasks: ['copy'],
        options: {
          spawn: false,
          livereload: true,
        }
      },
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'source/images',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'public/images/',
        }],
      },
    },
    concat: {
      dist: {
        src: [
          'source/js/*.js', // All JS in the libs folder
          // 'source/js/global.js'  // This specific file
        ],
        dest: 'public/js/bundle.js',
      },
    },
    uglify: {
      build: {
        src: 'public/js/bundle.js',
        dest: 'public/js/bundle.min.js',
      },
    },
    sass: {
      dist: {
        files: {
          'public/css/style.css' : 'source/css/style.scss',
          'public/css/pattern-scaffolding.css' : 'source/css/pattern-scaffolding.scss',
        },
      },
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: ['**'],
            cwd: 'source/js/json',
            dest: 'public/js/json/',
          },
          {
            expand: true,
            src: ['**/*.mustache'],
            cwd: 'source/_patterns',
            dest: 'public/js/mustache/',
            flatten: true,
          }
        ]
      }
    }
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin', 'copy', 'shell:patternlab', 'watch']);
  grunt.registerTask('server', 'shell:server');

};
