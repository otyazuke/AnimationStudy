var gulp = require('gulp');
var browser = require("browser-sync");
var config = require('../config');

gulp.task("server", function() {
    browser({
        port: 8000,
        // browser: 'Google Chrome Canary',
        server: {
            baseDir: config.dest,
        }
    });
});
