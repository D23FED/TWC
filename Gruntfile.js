module.exports = function(grunt) {
  require('jit-grunt')(grunt, {});
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: { //https://github.com/jshint/jshint/blob/master/examples/.jshintrc
        jshintrc: '.jshintrc',
        asi: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: false,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: false,
          node: true,
          '$': false
        }
      },
      main: [
        'core/js/*.js',
        '!core/js/build/production.js',
        '!core/js/build/production.min.js',
      ],
      sandbox: [
        'sandbox/**/js/*.js'
      ],
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },// jshint

    concat: {
    	stripBanners: true,
    	seperator: ';\n',
    	sourceMap: true,
      main: {
        src: [
          'core/js/*.js'
        ],
        dest: 'core/js/build/production.js'
      },
      dist2: {
        src: [
          '<%= pkg.paths.scripts %>' + '*.js'
        ],
        dest: '<%= pkg.files.distJs %>'
      }
    },

    uglify: {
      build: {
        src: 'core/js/build/production.js',
        dest: 'core/js/build/production.min.js'
      }
    },

    sass: {
		  options: {
		    style: 'expanded'
		    // sourceMap: true
		  },
	  	dist: {
	  	  files: [{
	  	    expand: true,
	  	    cwd: '',
	  	    src: ['**/*.scss'],
	  	    dest: '',
	  	    ext: '.css'
	  	  }]
			},
      sandbox: {
        files: [{
          expand: true,
          cwd: 'sandbox/',
          src: ['**/*.scss'],
          dest: 'sandbox/',
          ext: '.css'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/',
          src: ['**/*.scss'],
          dest: 'test/',
          ext: '.css'
        }]
      },
	    main: {
	      files: [{
	      	'core/css/main.css': 'core/scss/main.scss'
	      }]
	    }
    },

    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({ // add vendor prefixes
            browsers: 'last 3 versions'
          }),
          require('css-mqpacker')() // group media queries
	      ]
      },
      main: {
        options: {
          processors: [
            require('pixrem')(), // add fallbacks for rem units
            require('autoprefixer')({ // add vendor prefixes
              browsers: 'last 3 versions'
            }),
            require('cssnano')({
              sourcemap: true,
              safe: true
            }),
            require('css-mqpacker')() // group media queries
          ]
        },
        src: 'core/css/main.css'
      },
      sandbox: {
        options: {
          processors: [
            require('pixrem')(), // add fallbacks for rem units
            require('autoprefixer')({ // add vendor prefixes
              browsers: 'last 3 versions'
            }),
            require('css-mqpacker')() // group media queries
          ]
        },
        src: 'sandbox/**/*.css'
      },
      test: {
        options: {
          processors: [
            require('pixrem')(), // add fallbacks for rem units
            require('autoprefixer')({ // add vendor prefixes
              browsers: 'last 3 versions'
            }),
            require('css-mqpacker')() // group media queries
          ]
        },
        src: 'test/**/*.css'
      }
    }, //postcss

    cssmin: {
      combine: {
        files: {
          'core/css/main.min.css': [ 'core/css/main.css' ]
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'core/images/orig_assets',
          src: ['*.{png,jpg,gif}'],
          dest: 'core/images'
        }]
      }
    },

    clean: {
      dist: {
        files: [{
          src: ['<%= pkg.paths.dist %>']
        }]
      }
    },//clean

    watch: {
      scripts: {
        files: ['core/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: [
          'core/css/scss/partials/*.scss',
          'core/css/scss/modules/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
          spawn: false,
        }
      }
    }//watch

  });

  grunt.registerTask('build', [
    'concat:dist',
    'uglify',
    'sass',
    'cssmin',
    'imagemin',
    'watch'
  ]);

  grunt.registerTask('dev', [
    'concat:dist',
    'uglify', 'sass',
    'cssmin',
    'watch'
  ]);

  grunt.registerTask('js', [
    'jshint:main',
    'concat:main',
    'uglify']);

  grunt.registerTask('css', [
    'sass',
    'cssmin',
    'watch'
  ]);
  // grunt.registerTask('prefix', ['sass', 'cssmin', 'watch']);

  grunt.registerTask('main', [
    'sass:main',
    'postcss:main'
  ]);
  grunt.registerTask('sandbox', [
    'sass:sandbox',
    'postcss:sandbox'
  ]);
  grunt.registerTask('test', [
    'sass:test',
    'postcss:test'
  ]);

};