/*

	后台接口开发

 */
const db=require('./db.js');/*数据库模块*/
const express=require('express');
const app=express();



/*//指定api路径  allbooks(json接口)
app.get('/allbooks',(req,res)=>{
	let sql='select * from book';
	db.base(sql,null,(result)=>{//result是一个数组
		res.json(result);
	});
});*/

//指定api路径  allbooks(jsonp接口)
app.get('/allbooks',(req,res)=>{
	let sql='select * from book';/*sql语句*/
	db.base(sql,null,(result)=>{//result是一个数组
		res.jsonp(result);
	});
});



app.listen(3000,()=>{
	console.log('run...')
})