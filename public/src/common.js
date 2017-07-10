console.log('common');
define(['jquery','utils'],function  ($,utils){
    utils.typle_cookie();    // 判断登录

    utils.nav();    // 设置导航点击事件
        // .setMenu( href ) // 设置导航菜单选中状态
        // .setProfile()    // 设置个人信息
        // .signOut();      // 绑定退出功能
});