	//Todos los requerimientos de modulos para gulp

var gulp = require('gulp');
var browserSync = require('browser-sync').create();



gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dev/'
    },
  })
});

gulp.task('watch', ['browserSync'], function (){
  
   
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('dev/*.html', browserSync.reload);
  gulp.watch('dev/css/*.css', browserSync.reload);
  gulp.watch('dev/js/*.js', browserSync.reload);       
});