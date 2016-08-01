const http = require('http');

const babel = require('gulp-babel');
const gulp = require('gulp');
const pug = require('gulp-pug');
const st = require('st');
const stylus = require('gulp-stylus');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');

gulp.task('build', () => {
	gulp.src('assets/*').pipe(gulp.dest('./')).pipe(livereload());
	gulp.src('src/*.pug').pipe(pug()).pipe(gulp.dest('./')).pipe(livereload());
	gulp.src('src/*.styl')
		.pipe(stylus({compress: true}))
		.pipe(gulp.dest('dist'))
		.pipe(livereload());
	gulp.src('src/*.js')
		.pipe(babel({presets: ['es2015']}))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
		.pipe(livereload());
});

gulp.task('watch', ['build'], () => {
	http.createServer(st({path: process.cwd(), index: 'index.html', cache: false})).listen(3000);
	livereload.listen();
	gulp.watch(['src/*'], ['build']);
});
