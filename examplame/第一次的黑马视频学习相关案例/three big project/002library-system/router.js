/*

路由模块

*/

const express=require('express');

const router=express.Router();

//导入业务逻辑文件
//const service=require('./service.js');
const service=require('./service-mysql.js');



//一、路由处理


//1.渲染主页(第一个参数是路径，第二个参数是业务处理的方法)
router.get('/',service.showIndex);
//添加图书（跳转到添加图书的页面）
router.get('/toAddBook',service.toAddBook);


//添加图书（提交表单）
router.post('/addBook',service.addBook);


//跳转到编辑图书信息页面
router.get('/toEditBook',service.toEditBook);

//编辑图书提交表单
router.post('/editBook',service.editBook);


/*router.get('/toDeleteBook',service.toDeleteBook);*/
router.get('/deleteBook',service.deleteBook);


module.exports=router;//导出路由
