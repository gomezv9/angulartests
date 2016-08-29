var gulp = require('gulp');
var browserSync = require('browser-sync');
var karma = require('karma').server;

gulp.task('serve', function(){
	browserSync.init({
		notify:false,
		port:3000,
		server:{
			baseDir:["app"],
			routes:{
				'/bower_components':'bower_components'
			}
		}
	})

	gulp.watch(['app/**/*.*'])
		.on('change',browserSync.reload);
});

gulp.task('test-browser',function(done){
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	
	})
});

gulp.task('serve-test', function(){
	browserSync.init({
		notify:false,
		port:3001,
		server:{
			baseDir:["test","app"],
			routes:{
				'/bower_components':'bower_components'
			}
		}
	})

	gulp.watch(['app/**/*.*'])
		.on('change',browserSync.reload);
})