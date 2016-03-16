module.exports = function(grunt) {
  require('jit-grunt')(grunt, {});
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: { //https://github.com/jshint/jshint/blob/master/examples/.jshintrc
        asi: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          node: true
        }
      },
      beforeconcat: [
        '<%= pkg.paths.scripts %>' + '*.js',
        '!' + '<%= pkg.paths.vendorScripts %>' + '*.js'
      ],
      afterconcat: [
        '<%= pkg.files.distJs %>'
      ],
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },// jshint

    concat: {
    	stripBanners: true,
    	seperator: ';\n',
    	sourceMap: true,
      dist: {
        src: [
          'core/js/*.js'
        ],
        dest: 'core/js/build/production.js'
      },
      dist2: {
        src: [
          // '<%= pkg.paths.scripts %>' + 'libs/*.js',
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
	  	    dest: 'css',
	  	    ext: '.css'
	  	  }],
	  	  'main.css': 'main.scss'
			},
	    dev: {
	      files: [{
	      	'core/css/main.css': 'core/css/scss/main.scss'
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
          }), // add vendor prefixes
          require('cssnano')({
					  sourcemap: true,
					  safe: true
					}),
          require('css-mqpacker')() // group media queries
	      ]
      },
      dist: {
        src: '*.css'
      }
    }, //postcss

    concat: {
      options: {
        stripBanners: true,
        seperator: ';\n',
        sourceMap: true
      },
      dist: {
        src: [
          // '<%= pkg.paths.scripts %>' + 'libs/*.js',
          '<%= pkg.paths.scripts %>' + '*.js'
        ],
        dest: '<%= pkg.files.distJs %>'
      }
    },

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

    npmcopy: {
      // Javascript
      libs: {
        options: {
          destPrefix: '<%= pkg.paths.vendorScripts %>'
        },
        files: {
          'jquery.js': 'jquery/dist/jquery.min.js'
        }
      }
    },//npmcopy

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

  grunt.registerTask('build', ['concat:dist', 'uglify', 'sass', 'cssmin', 'imagemin', 'watch']);
  grunt.registerTask('dev', ['concat:dist', 'uglify', 'sass', 'cssmin', 'watch']);
  grunt.registerTask('js', ['concat:dist', 'uglify', 'watch']);
  grunt.registerTask('css', ['sass', 'cssmin', 'watch']);
  grunt.registerTask('prefix', ['sass', 'cssmin', 'watch']);
  grunt.registerTask('default', ['sass:dist']);

};