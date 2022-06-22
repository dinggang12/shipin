/*图书管理系统的入口文件*/

/*加载依赖的包*/
const router=require('./router.js');

const path=require('path');
const express=require('express');
const template=require('art-template');
const bodyParser=require('body-parser');
const app=express();


/*启动静态资源服务*///www是虚拟路径
app.use('/www',express.static('public'));



//设置模板引擎

//设置模板引擎的路径
app.set('views',path.join(__dirname,'views'));
//设置模板引擎的后缀
app.set('view engine','art');
//使express兼容art-template模板引擎
app.engine('art',require('express-art-template'));


//处理请求参数

//挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({extended:false}));
//处理json格式参数
app.use(bodyParser.json());



//启动服务器的功能
//
////配置路由
  app.use(router);

  //监听端口
  app.listen(3000,()=>{
  	console.log('run....');
  })