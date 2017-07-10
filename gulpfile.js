//配置文件

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
    gulp.src('app.js')
        .pipe(autoprefixer(
            // {
            // browsers: ['last 2 versions'],
            // cascade: false
        // }
        ))
        .pipe(gulp.dest('dist'))
);

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    console.log('测试gulp');
});