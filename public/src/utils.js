define(['jquery','md5','cookie'],function  ($,md5){
    return {
        nav:function  (){
            //导航栏
            $("#showLeftPush").click(function  () {
                $("#cbp-spmenu-s1").toggleClass("cbp-spmenu-open");
                $('#showLeftPush').addClass("active");
            });
            //个人中心
            $("#dro_open").click(function  (){
                $(this).toggleClass("open");

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

                            $.cookie.json = true;
                            $.cookie( 'userinfo', { name: username}, {
                                // domain: '.bobogu.com',
                                path: '/',
                                expires: 7
                            } );
                            window.location.href='/index/index';
                            $("#user-name").addClass('user-name');

                        }


                        console.log(data);

                    })
            });
            //点击图片刷新
            $("#vcodeimg").click(function () {
                $("#vcodeimg").attr("src","/account/vcode?id="+Math.random())
            })
        },
        typle_cookie:function  (){
            if($.cookie('userinfo')){
                var cookieName = $.parseJSON( $.cookie('userinfo')).name ;
                $("#user-name p").html(cookieName) ;
                $("#user-name").addClass('user-name');

                //注销登陆绑定
                $("#sign-out a").html('<i class="fa fa-sign-out"></i>注销');
                $("body").on("click","#sign-out",function  (){
                    $.removeCookie('userinfo', { path: '/' ,expires: 7});

                    window.location.href='/index/index';
                    console.log(cookieName);

                });
            }else{
                //登陆框显示隐藏
                $("body").on("click","#sign-out",function  (){
                    $("#login-show1").toggleClass("zoomInUp");
                    $("#login-show,#login-show1").toggleClass("sr-only");
                });
            };
        },

    };


})