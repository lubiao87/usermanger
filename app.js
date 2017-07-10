/**
 * Created by j on 2017/6/24.
 */
const express=require('express');
const  app=express();
const accountRouer=require('./router/accountRouter.js');
// const accountRouer1=require('./controller/controller.js');
const path=require('path');
const session=require('express-session');

app.use(session({
    secret: 'keyboard cat',
}));
//post处理
//共有的中间件处理放在 app.js使用
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//静态资源处理
app.use(express.static(path.join(__dirname,'public')));


//就可以处理account的路由
app.use('/account',accountRouer);
app.use('/news',accountRouer);
app.use('/account',accountRouer);
app.use('/index',accountRouer);
app.use('',accountRouer);

app.listen(3001,(err)=>{
    if(err)console.log(err);
    console.log('3001端口启动了');
});