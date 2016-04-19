"use strict";

// Config
var
	gulp, g = require('gulp'),
	$ = require('gulp-load-plugins')({
		pattern: ['gulp-*', 'gulp.*', 'autoprefixer', 'pixrem', 'postcss-*', 'css-*']
	}),
	postCssProcessors = [
		$.autoprefixer({
			browsers: 'last 3 versions'
		}),
		$.pixrem({
			rootValue: 10
		}),
		$.postcssFontAwesome,
		$.postcssDiscardDuplicates,
		$.cssMqpacker
	],
	paths = {
		scripts: [
			'./js/'
		],
		css: 'css/',
		test: 'test/',
		sandbox: './sandbox/',
		dist: './dist/',
		css: 'css/'
	},
	globs = {
		css: './css/**',
		sass: '**/*.scss',
		scripts: '**/*.js'
	};

// Tasks
g.task('style', function() {
	return g.src(
		['./test/' + globs.sass],
		{base: '.'})
		// Only process changed files
		.pipe($.changed(paths.dist + paths.css, { extension: '.css' }))
		// Output names of files being processed
		.pipe($.debug({title: 'Processing:'}))
		// Begin recording sourcemaps
		.pipe($.sourcemaps.init())
		// Compile Sass
		.pipe($.sass())
		// CSS processing
		.pipe($.postcss(postCssProcessors))
		// Write Sourcemaps
		.pipe($.sourcemaps.write('.'))
		// Write CSS to disk
		.pipe(g.dest(paths.dist + paths.css))
		.on('end', function() {
			$.util.log('CSS Processed');
		})
});

// Everything below is placeholder / WIP
/*
TODO:

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
*/
g.task('scripts', function() {
	return g.src(paths.scripts, {
			base: '.'
		})
		.pipe($.jshint('.jshintrc'))
		.pipe($.jshint.reporter('default'))
		.pipe($.concat('main.js'))
		.pipe(g.dest('dist/assets/js'))
		.pipe($.rename({
			suffix: '.min'
		}))
		.pipe($.uglify())
		.pipe(g.dest('dist/js'))
		.pipe($.notify({
			message: 'Scripts task complete'
		}));
});
g.task('clean', function() {
	return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img']);
});
g.task('images', function() {
	return g.src('src/images/**/*')
		.pipe(imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(g.dest('dist/assets/img'))
		.pipe(notify({
			message: 'Images task complete'
		}));
});
g.task('watch', function() {
	g.watch(paths.sandbox + globs.styles, ['styles']);
	g.watch(paths.test + globs.styles, ['styles']);
	// g.watch(paths.images, ['images']);
	// g.watch(paths.scripts, ['scripts']);
});
g.task('default', ['clean'], function() {
	g.start('styles', 'scripts', 'images');
});