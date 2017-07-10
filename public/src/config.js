// console.log('config');
require.config( {
    // baseUrl: '/ordering_system',
    paths:{
        // 插件模块
        template: '/bower_components/template',

        jquery: '/bower_components/jquery/dist/jquery',
        md5: '/md5',
        // cookie: 'assets/jquery-cookie/jquery.cookie',
        // progress: 'assets/nprogress/nprogress',
        // bootstrap: 'lib/bootstrap.min',
        // datepicker: 'assets/bootstrap-datepicker/js/bootstrap-datepicker.min',
        // language: 'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        // upload: 'assets/uploadify/jquery.uploadify.min',
        // region: 'assets/jquery-region/jquery.region',
        // ckeditor: 'assets/ckeditor/ckeditor',

        // 自定义模块
        utils: '/src/utils',
        common: '/src/common',

        login: '/src/index/login',
        // teacherList: 'src/teacher/list',
        // teacherManage: 'src/teacher/manage',
        // loading: 'src/progress',
        // profile: 'src/index/profile'

    },
    shim: {
        md5:{
            deps: [ 'jquery' ]
        }
        // bootstrap: {
        //     deps: [ 'jquery' ]
        // },
        // language: {
        //     deps: [ 'datepicker' ]
        // },
        // upload: {
        //     deps: [ 'jquery' ]
        // },
        // ckeditor: {
        //     exports: 'CKEDITOR'
        // }
    }
} );