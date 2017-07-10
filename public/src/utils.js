define(['jquery','md5'],function  ($,md5){
    return {
        login:function  (){
            //导航栏
            $("#showLeftPush").click(function  () {
                $("#cbp-spmenu-s1").toggleClass("cbp-spmenu-open");
                $('#showLeftPush').addClass("active");
            });
            //个人中心
            $("#dro_open").click(function  (){
                $(this).toggleClass("open");

            });
            //登陆框显示隐藏
            $("body").on("click","#sign-out",function  (){
                $("#login-show1").toggleClass("zoomInUp");
                $("#login-show,#login-show1").toggleClass("sr-only");
            });
            //隐藏登录
            $("body").on("click","#login-show",function  (){
                $("#login-show1").toggleClass("zoomInUp");
                $("#login-show,#login-show1").toggleClass("sr-only");
            });
            //注册
            $('#register').click(()=>{
                window.location.href='/account/register'
            });
            //登录
            $("#login").click(()=> {
                let username=$("#username").val();
                let pwd=$.md5($("#pwd").val());
                let vcode=$("#vcode").val();
                $.post(
                    '/account/logindata',
                    {username,pwd,vcode},
                    (data)=>{
                        if(data==username){
                            console.log(data);
                            window.location.href='/account/login'
                        }
                        console.log(data);

                    })
            });
            //点击图片刷新
            $("#vcodeimg").click(function () {
                $("#vcodeimg").attr("src","/account/vcode?id="+Math.random())
            })
        }
    };


})