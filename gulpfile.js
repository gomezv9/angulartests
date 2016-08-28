var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function(){
	browserSync.init({
		notify:false,
		port:3000,
		server:{
			baseDir:["app"],
			routes:{
				'/bower_components':'bower_componenst'
			}
		}
	})

	gulp.watch(['app/**/*.*'])
		.on('change',browserSync.reload);
})