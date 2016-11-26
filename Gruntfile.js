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
    dist: 'dist',
    demo: 'demo',
    demodist: 'docs',
    ngar: 'ngar/src',
    ngardist: 'ngar/dist',
    ngarMatUi: 'ngar-material-ui/src',
    ngarMatUidist: 'ngar-material-ui/dist'
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
        files: ['<%= yeoman.demo %>/scripts/{,*/}*.js','<%= yeoman.ngar %>/**/*.js','<%= yeoman.ngarMatUi %>/**/*.js'],
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
                '/ngar',
                connect.static('./ngar')
              ),
              connect().use(
                '/ngar-material-ui',
                connect.static('./ngar-material-ui')
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
      docs: {
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
          '<%= yeoman.ngar %>/{,*/}*.js',
          '<%= yeoman.ngarMatUi %>/{,*/}*.js'
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
          '<%= yeoman.ngar %>/{,*/}*.js',
          '<%= yeoman.ngarMatUi %>/{,*/}*.js'
        ]
      },
      test: {
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      demo: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.demodist %>',
            '!<%= yeoman.demodist %>/.git{,*/}*'
          ]
        }]
      },
      ngar: {
        files: [{
          dot: true,
          src: [
            '.ngartmp',
            '<%= yeoman.ngardist %>/**',
            '!<%= yeoman.ngardist %>/.git{,*/}*'
          ]
        }]
      },
      ngarMatUi: {
        files: [{
          dot: true,
          src: [
            '.ngarMatUitmp',
            '<%= yeoman.ngarMatUidist %>/**',
            '!<%= yeoman.ngarMatUidist %>/.git{,*/}*'
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
      },
      demo: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '*.css',
          dest: '<%= yeoman.demodist %>/styles/'
        }]
      }
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
    //   demo: {
    //     src: [
    //       '<%= yeoman.demodist %>/scripts/{,*/}*.js',
    //       '<%= yeoman.demodist %>/styles/{,*/}*.css',
    //       '<%= yeoman.demodist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
    //       '<%= yeoman.demodist %>/styles/fonts/*'
    //     ]
    //   },
    //   ngar: {
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
      css: ['<%= yeoman.demodist %>/{,*/}*.css'],
      js: ['<%= yeoman.demodist %>/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.demodist %>',
          '<%= yeoman.demodist %>/images',
          '<%= yeoman.demodist %>/styles'
        ],
        patterns: {
          js: [
            [/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']
          ]
        }
      }
    },

    // The following *-min tasks will produce minified files in the demodist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      ngarMatUi: {
        files: {
          '<%= yeoman.ngarMatUidist %>/ngarMaterialUi.min.css': [
            '<%= yeoman.ngarMatUidist %>/ngarMaterialUi.css']
        },
      }
    },

    concat_css: {
      dist: {
        src: ['<%= yeoman.ngarMatUidist %>/**/*.css'],
        dest: '<%= yeoman.dist %>/ngar.all.css'
      },
      ngarMatUi: {
        src: ['<%= yeoman.ngarMatUi %>/**/*.css'],
        dest: '<%= yeoman.ngarMatUidist %>/ngarMaterialUi.css'
      }
    },

    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      ngar: {
        files: {
          '<%= yeoman.ngardist %>/ngar.min.js': [
            '<%= yeoman.ngardist %>/ngar.js'
          ]
        }
      },
      ngarMatUi: {
        files: {
          '<%= yeoman.ngarMatUidist %>/ngarMaterialUi.min.js': [
            '<%= yeoman.ngarMatUidist %>/ngarMaterialUi.js'
          ]
        }
      }
    },

    concat: {
      dist: {
        src: ['<%= yeoman.ngardist %>/ngar.js','<%= yeoman.ngarMatUidist %>/ngarMaterialUi.js'], // need to concate in this order
        dest: '<%= yeoman.dist %>/ngar.all.js'
      },
      ngar: {
        src: ['.ngartmp/ngarModule.js','.ngartmp/**/*.js'], // need to concate in this order
        dest: '<%= yeoman.ngardist %>/ngar.js'
      },
      ngarMatUi: {
        src: ['.ngarMatUitmp/ngarMaterialUiModule.js','.ngarMatUitmp/**/*.js'], // need to concate in this order
        dest: '<%= yeoman.ngarMatUidist %>/ngarMaterialUi.js'
      }
    },

    imagemin: {
      demo: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.demo %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.demodist %>/images'
        }]
      }
    },

    svgmin: {
      demo: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.demo %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.demodist %>/images'
        }]
      }
    },

    ngAnnotate: {
      docs: {
        files: [{
          expand: true,
          cwd: '.tmp',
          src: '**/*.js',
          dest: '.tmp'
        }]
      },
      ngar: {
        files: [{
          expand: true,
          cwd: '.ngartmp',
          src: '**/*.js',
          dest: '.ngartmp'
        }]
      },
      ngarMatUi: {
        files: [{
          expand: true,
          cwd: '.ngarMatUitmp',
          src: '**/*.js',
          dest: '.ngarMatUitmp'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      demo: {
        html: ['<%= yeoman.demodist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      demo: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.demo %>',
          dest: '<%= yeoman.demodist %>',
          src: [
            'scripts/**/*.js',
            '**/*.html'
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
      ngar: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.ngar %>',
          dest: '.ngartmp',
          src: [
            '**/*.js'
          ]
        }]
      },
      ngarMatUi: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.ngarMatUi %>',
          dest: '.ngarMatUitmp',
          src: [
            '**/*.js',
            '**/*.css'
          ]
        }]
      },
      styles: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.demo %>',
          dest: '.tmp',
          src: [
            'styles/**/*.css'
          ]
        }]
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
      demo: [
        'copy:styles',
        'imagemin:demo',
        'svgmin:demo'
      ]
    },

    'gh-pages': {
      options: {
        message: 'Auto-generated commit'
      },
      'demo': {
        options: {
          base: 'demodist',
          branch: 'master'
        },
       // These files will get pushed to the `gh-pages` branch (the default).
        src: ['index.html']
      },
      'ngar': {
        options: {
          base: 'ngar',
          branch: 'master',
          tag: require('./ngar/bower.json').version,
          repo: 'https://github.com/stephandacosta/ngar.git'
        },
        src: '**/*.*'
      },
      'ngarMatUi': {
        options: {
          base: 'ngar-material-ui',
          branch: 'master',
          tag: require('./ngar-material-ui/bower.json').version,
          repo: 'https://github.com/stephandacosta/ngar-material-ui.git'
        },
        src: '**/*.*'
      }
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
    if (target === 'docs') {
      return grunt.task.run(['build:demo', 'connect:docs:keepalive']);
    }

    grunt.task.run([
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

  grunt.registerTask('push', 'building', function (target) {
    if (target === 'bower') {
      return grunt.task.run([
        'build:ngar',
        'build:ngarMatUi',
        'gh-pages:ngar',
        'gh-pages:ngarMatUi'
      ]);
    }
    if (target === 'demo') {
      return grunt.task.run([
        'build:demo',
        'gh-pages:demo'
      ]);
    }
    return;
  });

  grunt.registerTask('build', 'building', function (target) {
    if (target === 'demo') {
      // build demodist folder
      return grunt.task.run([
        'clean:demo',
        'wiredep',
        'useminPrepare', // usemin all the build files (bower components)
        'concurrent:demo', //copy demo styles into tmp
        'postcss:demo', // add prefixes in tmp
        'concat:generated', // concat the build files
        'ngAnnotate:docs',
        'cdnify',
        'cssmin:generated',
        'uglify:generated',
        'copy:demo',
        'usemin'
      ]);
    }
    if (target === 'ngar') {
      return grunt.task.run([
        'clean:ngar',  // clean temp and dist folders
        'copy:ngar', // copy source code to temp folder
        'ngAnnotate:ngar', // make the code safe for minification using Angular long form dependency injection
        'concat:ngar', // concatenate all js files in temp folder then put to dist folder
        'uglify:ngar' // uglify the concatenated js file and create new min.js file
      ]);
    }
    if (target === 'ngarMatUi') {
      return grunt.task.run([
        'clean:ngarMatUi', // clean temp and dist folders
        'copy:ngarMatUi', // copy source code to temp folder
        'ngAnnotate:ngarMatUi', // make the code safe for minification using Angular long form dependency injection
        'concat:ngarMatUi', // concatenate all js files in temp folder then put to dist folder
        'concat_css:ngarMatUi', // concatenate all css files then put to dist folder
        'cssmin:ngarMatUi', // minify all css files in temp folder then put to dist folder
        'uglify:ngarMatUi' // uglify the concatenated js file and create new min.js file
      ]);
    }
    if (target === 'dist') {
      return grunt.task.run([
        'clean:dist',
        'concat:dist',  // concatenate modules' js to dist
        'concat_css:dist' // copy modules' css to dist
      ]);
    }
    return grunt.task.run([
      'build:ngar',
      'build:ngarMatUi',
      'build:dist',
      'build:demo'
    ]);
  });





  grunt.registerTask('default', [
    'newer:jshint',
    'newer:jscs',
    'test',
    'build'
  ]);
};
