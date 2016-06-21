"use strict";

var mapNewer = function(relativePath) {
		var find = 'scss';
		var replace = 'css';
		var log = false;
		if (log) {
			if (relativePath.indexOf(find) !== -1) {
				console.log(relativePath, ' => ', relativePath.replace(find, replace))
			} else {
				console.log('Not remapped: ', relativePath)
			}
		}
		return relativePath.replace(find, replace);
	}
// Config
var
	gulp, g = require('gulp'),
	$ = require('gulp-load-plugins')({
		pattern: ['gulp-*', 'gulp.*', 'autoprefixer', 'pixrem', 'postcss-*', 'css-*']
	}),
	path = require('path'),
	browserSync = require('browser-sync').create(),
	postCssProcessors = [
		$.autoprefixer({
			browsers: 'last 3 versions'
		}),
		// $.postcssFilterGradient,
		$.pixrem({
			rootValue: 10,
			atrules: true,
			unitPrecision: 1
		}),
		$.postcssFontAwesome,
		$.postcssDiscardDuplicates,
		$.cssMqpacker
	],
	paths = {
		source: 'src/',
		scripts: 'js/',
		css: 'css/',
		test: 'test/',
		sandbox: 'sandbox/',
		dist: 'twc/',
		css: 'css/'
	},
	sassIncludePaths = [
		'src',
		'src/core',
		'src/core/scss',
		'src/core/scss/partials',
		'src/core/scss/modules',
		'style',
		'scss'
	],
	globs = {
		css: './css/**',
		sass: '**/*.scss',
		html: '**/*.html',
		php: '**/*.php',
		jade: '**/*.jade',
		scripts: '**/*.js',
		img: '**/*.{jpg,jpeg,gif,png}'
	};

// Tasks
g.task('style-all', function() {
	return g.src([
			paths.source + globs.sass,
			'!node_modules/**/*',
			'!' + paths.source + 'core/'  + globs.sass,
			], {
				base: './src/'
			})
		// Only process changed files
		// .pipe($.changed(paths.dist, {
		// 	extension: '.css'
		// }))
		.pipe($.newer({
			dest: paths.dist,
			map: mapNewer,
			ext: '.css'
		}))
		// Output names of files being processed
		.pipe($.debug({
			title: 'Processing:'
		}))
		// Begin recording sourcemaps
		.pipe($.sourcemaps.init())
		// Compile Sass
		.pipe($.sass({
			includePaths: sassIncludePaths,
			outputStyle: 'expanded',
			precision: 1
		}))
		// CSS processing
		.pipe($.postcss(postCssProcessors))
		// Write Sourcemaps
		.pipe($.sourcemaps.write('.'))
		.pipe($.rename(function(path) {
			path.dirname = path.dirname.replace('scss', 'css');
			return path;
		}))
		// Write CSS to disk
		.pipe(g.dest(paths.dist))
		// .pipe(browserSync.stream({match: '**/*.css'}));
		.pipe($.debug({
			title: 'Output:',
			minimal: true
		}))
		.on('end', function() {
			$.util.log('CSS Processed');
		})
});

g.task('style-core', function() {
	return g.src(
			[paths.source + 'core/scss/main.scss', '!node_modules/**/*'], {
				base: paths.source
			})
		.pipe($.sourcemaps.init())
		// .pipe($.newer({
		// 	dest: paths.dist,
		// 	map: mapNewer,
		// 	ext: '.css'
		// }))
		// Output names of files being processed
		.pipe($.debug({
			title: 'Processing:'
		}))
		// Begin recording sourcemaps
		// Compile Sass
		.pipe($.sass({
			includePaths: sassIncludePaths,
			outputStyle: 'expanded',
			precision: 1
		}))
		// CSS processing
		.pipe($.postcss(postCssProcessors))
		// Write Sourcemaps
		.pipe($.rename(function(path) {
			path.dirname = path.dirname.replace('scss', 'css');
			path.basename += '.min';
			return path;
		}))
		.pipe($.sourcemaps.write('.'))
		// Write CSS to disk
		.pipe(g.dest(paths.dist))
		// .pipe(browserSync.stream({match: '**/*.css'}));
		.pipe($.debug({
			title: 'Output:',
			minimal: true
		}))
		.on('end', function() {
			$.util.log('CSS Processed');
		})
});

g.task('jade', function() {
	return g.src(
			[paths.source + globs.jade], {
				base: './src/'
			})
		.pipe($.debug({
			title: 'Processing:'
		}))
		.pipe($.jade({
			pretty: '\t'
		}))
		.pipe(g.dest(paths.dist))
		.pipe($.debug({
			title: 'Output:'
		}))

});

g.task('html', function() {
	return g.src(
			[paths.source + globs.html], {
				base: './src/'
			})
		.pipe(g.dest(paths.dist))
})
g.task('php', function() {
	return g.src(
			[paths.source + globs.php], {
				base: './src/'
			})
		.pipe($.newer(paths.dist))
		.pipe(g.dest(paths.dist))
		.pipe($.debug({
			title: 'Output:'
		}))
})

g.task('scripts', function() {
	return g.src([
		paths.source + globs.scripts,
		'!node_modules/**/*'],
		{
			base: './src/'
		})
		.pipe($.changed(paths.dist))
		.pipe($.debug({
			title: 'Processing:'
		}))
		// Lint
		.pipe($.eslint({
			extends: 'eslint:recommended',
			ecmaFeatures: {
				'impliedStrict': true
			},
			rules: {
				'strict': ['off', 'global'],
				'indent': 'off',
				'no-console': 'warn',
				'no-debugger': 'warn',
				'no-extra-semi': 'warn',
				'no-empty': 'warn',
				'comma-dangle': 'warn',
				'linebreak-style': 'off'
			},
			globals: {
				'jQuery': true,
				'$': true
			}
		}))
		.pipe($.eslint.format())
		// Concat
		// .pipe($.concat('main.js'))
		// .pipe($.jsbeautifier({
		// 	indent_char: '\t',
		// 	indent_size: 1,
		// 	space_in_paren: true
		// }))
		.pipe($.jsPrettify({
	    "indent_size": 1,
	    "indent_char": "	",
	    "eol": "\n",
	    "indent_level": 0,
	    "indent_with_tabs": true,
	    "preserve_newlines": true,
	    "max_preserve_newlines": 2,
	    "space_after_anon_function": false,
	    "brace_style": "collapse",
	    "keep_array_indentation": true,
	    "keep_function_indentation": false,
	    "space_before_conditional": true,
	    "break_chained_methods": false,
	    "eval_code": false,
	    "unescape_strings": false,
	    "wrap_line_length": 0,
	    "wrap_attributes": "auto",
	    "wrap_attributes_indent_size": 4,
	    "end_with_newline": true
		}))
		.pipe(g.dest(paths.dist))
		.pipe($.debug({
			title: 'Output:',
			minimal: true
		}))
		.pipe($.stripDebug())
		.pipe($.rename({
			suffix: '.dist'
		}))
		// Uglify
		.pipe($.uglify())
		.pipe(g.dest(paths.dist))
		// .pipe($.notify({
		// 	message: 'Scripts task complete'
		// }));
});
g.task('clean', function() {
	return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img']);
});
g.task('images', function() {
	return g.src(paths.source + globs.img, {
			base: './src/'
		})
		.pipe($.plumber())
		.pipe($.changed(paths.dist))
		.pipe($.imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe($.plumber.stop())
		.pipe(g.dest(paths.dist))
		.pipe($.debug({
			title: 'Processing image:'
		}))
		// .pipe($.notify({
		// 	message: 'Images task complete'
		// }));
});
g.task('watch', function() {
	g.watch(paths.sandbox + globs.sass, g.parallel('style'));
	g.watch(paths.source + globs.html, g.parallel('html'));
	g.watch(paths.source + globs.php, g.parallel('php'));
});
g.task('markup',
	g.parallel('jade', 'html', 'php'));

g.task('style',
	g.parallel('style-all', 'style-core'));

g.task('default',
	g.parallel('style', 'markup', 'scripts', 'images'));


// g.task('serve', ['style'], function() {
//   $.browserSync.init({
//       server: paths.dist
//   });
//   // gulp.watch("app/scss/*.scss", ['style']);
//   // gulp.watch("app/*.html").on('change', browserSync.reload);
// });

/*
TODO:
Create seperate dev/dist tasks

Add plugins:
JS
==
concat
eslint
jsbeautifier
strip-debug
uglify (?)

Images
======
iconfont
imagemin

General
=======
plumber
notify
postcss-assets
zip
browser-sync
environment

*/
