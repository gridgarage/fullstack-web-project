var gulp = require('gulp'),
 watch = require('gulp-watch'),
 postcss = require('gulp-postcss'),
 autoprefixer = require('autoprefixer'),
 sass = require('gulp-sass');


gulp.task('default', async function(){
    console.log("Horray, gulp is working"); 
});
gulp.task('html',function(){
    return console.log("Html version is 5");
});

gulp.task('styles',function(){
    return gulp.src('./src/assets/scss/style.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest('./dist'));
});


gulp.task('watch',function (){
       watch ('./*.html', gulp.series ('html'));
       watch('./src/assets/scss/*.scss', gulp.series('styles'));
    
    });


  
    
