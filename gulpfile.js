let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');
let babel = require('gulp-babel');
let func = require("gulp-function").default;
let path = require('path');

let paths = {
    es6: ['src/**/*.js'],
    es5: 'dist',
    // Must be absolute or relative to source map
    sourceRoot: path.join(__dirname, 'src'),
};

let appRun = function() {
    console.log("=============================================================================================");
    let app = require('./index');
    app.run();
    console.log("=============================================================================================");
}

gulp.task('default', function () {
    return gulp.src(paths.es6)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.', { sourceRoot: paths.sourceRoot }))
        .pipe(gulp.dest(paths.es5))
        .pipe(func(appRun, "atEnd"));
});
/*
gulp.task('watch', function() {
    gulp.watch(paths.es6, ['babel']);
});

gulp.task('default', ['babel']);
*/