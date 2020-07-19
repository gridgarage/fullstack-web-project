var gulp = require('gulp'),
 watch = require('gulp-watch'),
 postcss = require('gulp-postcss'),
 autoprefixer = require('autoprefixer'),
 cssImport = require('postcss-import'),
 sass = require('gulp-sass'),
 browserSync = require('browser-sync').create();

// Compile sass into CSS & auto-inject into browsers
gulp.task('styles',function(){
    return gulp.src("./src/assets/scss/style.scss")
        .pipe(sass())
        .pipe(postcss([cssImport, autoprefixer]))
        .on('error', async function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');

        })
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('watch',function (){
    browserSync.init({
        notify: false,
        server: {
            baseDir:"./"
        }
    });
      watch ("./*.html").on('change', browserSync.reload);
     
     /*  watch ('./*.html', gulp.series ('html')); */
      watch("./src/assets/scss/**/*.scss", gulp.series('styles'));
    
    });



  
    
