// Generated on 2016-11-12 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn'
  });

  // Configurable paths for the application
  var yoConfig = {
    demo: 'demo',
    demodist: 'demodist',
    ngar: 'src',
    ngardist: 'ngardist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    pkg: {
      name: require('./bower.json').name,
      version: require('./bower.json').version
    },

    // Project settings
    yeoman: yoConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.demo %>/scripts/{,*/}*.js','<%= yeoman.ngar %>/{,**/}*.js'],
        tasks: ['newer:jshint:all', 'newer:jscs:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.demo %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'postcss']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.demo %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.demo %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/src',
                connect.static('./src')
              ),
              connect().use(
                '/ngardist',
                connect.static('./ngardist')
              ),
              connect().use(
                '/demo/styles',
                connect.static('./demo/styles')
              ),
              connect.static(yoConfig.demo)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(yoConfig.demo)
            ];
          }
        }
      },
      demodist: {
        options: {
          open: true,
          base: '<%= yeoman.demodist %>'
        }
      }
    },

    // Make sure there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.demo %>/scripts/{,*/}*.js',
          '<%= yeoman.ngar %>/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Make sure code styles are up to par
    jscs: {
      options: {
        config: '.jscsrc',
        force: true
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.demo %>/scripts/{,*/}*.js',
          '<%= yeoman.ngar %>/{,*/}*.js'
        ]
      },
      test: {
        src: ['test/spec/{,*/}*.js']
      }
    },

    // used for creating the UI templates in javascript
    // htmlConvert: {
    //   options: {
    //     rename: function (moduleName) {
    //       return '/' + moduleName.replace('.html', '');
    //     },
    //     quoteChar: '\'',
    //
    //     // custom options, see below
    //   },
    //   mytemplate: {
    //     src: ['src/ui/**/*.html'],
    //     dest: 'src/ui/templatesJs/templates.js'
    //   },
    // },



    // Empties folders to start fresh
    clean: {
      demodist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.demodist %>/{,*/}*',
            '!<%= yeoman.demodist %>/.git{,*/}*'
          ]
        }]
      },
      ngardist: {
        files: [{
          dot: true,
          src: [
            '.ngartmp',
            '<%= yeoman.ngardist %>/{,*/}*',
            '!<%= yeoman.ngardist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: ['last 1 version']})
        ]
      },
      server: {
        options: {
          map: true
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
      // ,
      // demodist: {
      //   files: [{
      //     expand: true,
      //     cwd: '.tmp/styles/',
      //     src: '{,*/}*.css',
      //     dest: '.tmp/styles/'
      //   }]
      // },
      // ngardist: {
      //   files: [{
      //     expand: true,
      //     cwd: '.ngartmp/styles/',
      //     src: '{,*/}*.css',
      //     dest: '.ngartmp/styles/'
      //   }]
      // }
    },

    // Automatically inject Bower components into the demo
    wiredep: {
      demo: {
        devDependencies: true,
        src: ['<%= yeoman.demo %>/index.html'],
        exclude: [ 'bower_components/angular-mocks' ],
        ignorePath:  /\.\.\//
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
              detect: {
                js: /'(.*\.js)'/gi
              },
              replace: {
                js: '\'{{filePath}}\','
              }
            }
          }
      }
    },

    // Renames files for browser caching purposes
    // filerev: {
    //   demodist: {
    //     src: [
    //       '<%= yeoman.demodist %>/scripts/{,*/}*.js',
    //       '<%= yeoman.demodist %>/styles/{,*/}*.css',
    //       '<%= yeoman.demodist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
    //       '<%= yeoman.demodist %>/styles/fonts/*'
    //     ]
    //   },
    //   ngardist: {
    //     src: [
    //       '<%= yeoman.ngardist %>/scripts/{,*/}*.js',
    //       '<%= yeoman.ngardist %>/styles/{,*/}*.css',
    //       '<%= yeoman.ngardist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
    //       '<%= yeoman.ngardist %>/styles/fonts/*'
    //     ]
    //   }
    // },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.demo %>/index.html',
      options: {
        dest: '<%= yeoman.demodist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.demodist %>/{,*/}*.html'],
      css: ['<%= yeoman.demodist %>/styles{,*/}*.css'],
      js: ['<%= yeoman.demodist %>/scripts{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.demodist %>',
          '<%= yeoman.demodist %>/images',
          '<%= yeoman.demodist %>/styles'
        ],
        patterns: {
          js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
        }
      }
    },

    // The following *-min tasks will produce minified files in the demodist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      ngardist: {
        files: {
          '<%= yeoman.ngardist %>/ngar.min.css': [
            '.ngartmp/{,*/}*.css'
          ]
        }
      }
    },

    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      ngardist: {
        files: {
          '<%= yeoman.ngardist %>/ngar.min.js': [
            '<%= yeoman.ngardist %>/ngar.js'
          ]
        }
      }
    },

    concat: {
      ngardist: {
        src: ['.ngartmp/**/*.js'],
        dest: 'ngardist/ngar.js',
      }
    },

    imagemin: {
      demodist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.demo %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.demodist %>/images'
        }]
      }
    },

    svgmin: {
      demodist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.demo %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.demodist %>/images'
        }]
      }
    },

    // htmlmin: {
    //   demodist: {
    //     options: {
    //       collapseWhitespace: true,
    //       conservativeCollapse: true,
    //       collapseBooleanAttributes: true,
    //       removeCommentsFromCDATA: true
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: '<%= yeoman.demodist %>',
    //       src: ['*.html'],
    //       dest: '<%= yeoman.demodist %>'
    //     }]
    //   }
    // },

    // ngtemplates: {
    //   demodist: {
    //     options: {
    //       module: 'angularGapiAnalyticsreportingDemoApp',
    //       htmlmin: '<%= htmlmin.demodist.options %>',
    //       usemin: 'scripts/scripts.js'
    //     },
    //     cwd: '<%= yeoman.demo %>',
    //     src: 'views/{,*/}*.html',
    //     dest: '.tmp/templateCache.js'
    //   }
    // },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      demodist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      },
      ngardist: {
        files: [{
          expand: true,
          cwd: '.ngartmp',
          src: '**/*.js',
          dest: '.ngartmp'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      demodist: {
        html: ['<%= yeoman.demodist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      demodist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.demo %>',
          dest: '<%= yeoman.demodist %>',
          src: [
            '**/*.js',
            '**/*.css',
            '**/*.html'
          ]
        },{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.ngardist %>',
          dest: '<%= yeoman.demodist %>/ngardist',
          src: [
            '**/*.js',
            '**/*.css',
          ]
        },{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.demo %>',
          dest: '<%= yeoman.demodist %>',
          src: [
            '*.{ico,png,txt}',
            'images/{,*/}*.{webp}',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.demodist %>/images',
          src: ['generated/*']
        }]
      },
      ngardist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.ngar %>',
          dest: '.ngartmp',
          src: [
            '*.js',
            // 'test/*.js',
            'services/*.js',
            'ui/{,*/}*.js',
            'ui/{,*/}*.css'
          ]
        },{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.ngar %>',
          dest: '.ngartmp/styles',
          src: [
            'ui/{,*/}*.css'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.demo %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      demodist: [
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'demodist') {
      return grunt.task.run(['demobuild', 'connect:demodist:keepalive']);
    }

    grunt.task.run([
      'ngarbuild',
      'clean:server',
      'wiredep',
      'concurrent:server',
      'postcss:server',
      'connect:livereload',
      'watch'
    ]);
  });


  grunt.registerTask('test', [
    'clean:server',
    'wiredep',
    'concurrent:test',
    'postcss',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('demobuild', [
    'ngarbuild',
    'clean:demodist',
    'wiredep',
    'useminPrepare',
    'concurrent:demodist',
    // 'postcss:demodist',
    // 'ngtemplates',
    'concat:generated',
    'ngAnnotate:demodist',
    'cdnify',
    'cssmin:generated',
    'uglify:generated',
    'copy:demodist',
    // 'filerev:demodist',
    'usemin',
    // 'htmlmin:demodist'
  ]);

  grunt.registerTask('ngarbuild', [
    'clean:ngardist',
    // 'concurrent:ngardist',
    'copy:ngardist',
    'ngAnnotate:ngardist',
    'concat:ngardist',
    'cssmin:ngardist',
    'uglify:ngardist',
    // 'postcss',
    // 'filerev'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'newer:jscs',
    'test',
    'build'
  ]);
};
