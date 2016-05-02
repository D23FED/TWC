"use strict";

var mapNewer = function (relativePath) {
	var find = 'scss';
	var replace = 'css';
	var log = false;
	if (log) {
		if ( relativePath.indexOf(find) !== -1 ) {
			console.log(relativePath,' => ',relativePath.replace(find, replace))
		} else {
			console.log('Not remapped: ',relativePath)
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
			[paths.source + globs.sass,'!node_modules/**/*'], {
				base: './src/'
			})
		// Only process changed files
		// .pipe($.changed(paths.dist, {
		// 	extension: '.css'
		// }))
		.pipe($.newer({dest: paths.dist, map: mapNewer, ext:'.css'}))
		// .pipe($.cached('style'))
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

// Everything below is placeholder / WIP
g.task('scripts', function() {
	return g.src(paths.source + globs.scripts, {
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
				'strict': ['off','global'],
				'indent': 'off',
				'no-console': 'warn',
				'no-debugger': 'warn',
				'no-extra-semi': 'warn',
				'no-empty': 'warn',
				'comma-dangle': 'warn'
			},
			globals: {
				'jQuery': true,
				'$': true
			}
		}))
		.pipe($.eslint.format())
		// Concat
		// .pipe($.concat('main.js'))
		.pipe($.jsbeautifier({
		    // config: './config.json',
		    indent_char: '\t',
		    indent_size: 1,
		    space_in_paren: true
  	}))
		.pipe(g.dest(paths.dist))
		.pipe($.debug({
			title: 'Output:',
			minimal: true
		}))
		//.pipe($.stripDebug())
		.pipe($.rename({
			suffix: '.dist'
		}))
		// Uglify
		// .pipe($.uglify())
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
	g.watch( paths.sandbox + globs.sass, g.parallel('style') );
	g.watch( paths.source + globs.html, g.parallel('html') );
	g.watch( paths.source + globs.php, g.parallel('php') );
	// g.watch(paths.images, ['images']);
	// g.watch(paths.scripts, ['scripts']);
});
//g.task('watch-markup', function() {});
g.task('markup',
	g.parallel('jade', 'html', 'php'));

// g.task('serve', ['style'], function() {
//   $.browserSync.init({
//       server: paths.dist
//   });
//   // gulp.watch("app/scss/*.scss", ['style']);
//   // gulp.watch("app/*.html").on('change', browserSync.reload);
// });

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