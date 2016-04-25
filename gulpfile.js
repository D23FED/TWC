"use strict";

// Config
var
	gulp, g = require('gulp'),
	$ = require('gulp-load-plugins')({
		pattern: ['gulp-*', 'gulp.*', 'autoprefixer', 'pixrem', 'postcss-*', 'css-*']
	}),
	path = require('path'),
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
		source: 'src/',
		scripts: 'js/',
		css: 'css/',
		test: 'test/',
		sandbox: 'sandbox/',
		dist: 'twc/',
		css: 'css/'
	},
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
g.task('style', function() {
	return g.src(
			[paths.source + globs.sass], {
				base: './src/'
			})
		// Only process changed files
		.pipe($.changed(paths.dist, {
			extension: '.css'
		}))
		// Output names of files being processed
		.pipe($.debug({
			title: 'Processing:'
		}))
		// Begin recording sourcemaps
		.pipe($.sourcemaps.init())
		// Compile Sass
		.pipe($.sass())
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
		.pipe($.debug({
			title: 'Output:',
			minimal: false
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
		.pipe(g.dest(paths.dist))
})

// Everything below is placeholder / WIP
g.task('scripts', function() {
	return g.src(paths.source + globs.scripts, {
			base: './src/'
		})
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
				'strict': 2
			},
			globals: {
				'jQuery': true,
				'$': true
			}
		}))
		.pipe($.eslint.format())
		// Concat
		// .pipe($.concat('main.js'))
		.pipe(g.dest(paths.dist))
		.pipe($.debug({
			title: 'Output:',
			minimal: false
		}))
		.pipe($.stripDebug())
		.pipe($.rename({
			suffix: '.dist'
		}))
		// Uglify
		// .pipe($.uglify())
		.pipe(g.dest(paths.dist))
		.pipe($.notify({
			message: 'Scripts task complete'
		}));
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
	g.watch(paths.sandbox + globs.styles, ['styles']);
	g.watch(paths.test + globs.styles, ['styles']);
	// g.watch(paths.images, ['images']);
	// g.watch(paths.scripts, ['scripts']);
});
g.task('markup',
	g.parallel('jade', 'html', 'php'));
g.task('default',
	g.parallel('style', 'markup', 'scripts', 'images'));
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