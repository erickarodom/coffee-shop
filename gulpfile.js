const {src, dest, watch, series} = require('gulp');
const browsersync = require('browser-sync').create();


function startServer(cb){
    browsersync.init(
        {
            server: {
                baseDir: './'
            }
        }
    )
    cb();
}

function refresh(cb){
    browsersync.reload();
    cb();
}

function watchTasks(){
    watch('*.html', refresh);
    watch('styles/**/*.css', refresh);
}

exports.default = series(
    startServer,
    watchTasks
);