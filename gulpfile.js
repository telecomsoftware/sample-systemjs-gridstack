var gulp = require('gulp');
var browserSync = require('browser-sync');

function serve(done) {
    let opts = {
        online: false,
        open: false,
        port: 9100,
        ghostMode: false,
        reloadDebounce: 1000,
        server: {
            baseDir: '.'
        }
    };
    browserSync(opts, done);
}

gulp.task('serve', serve);