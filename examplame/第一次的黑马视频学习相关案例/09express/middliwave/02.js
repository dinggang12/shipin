/*
中间件的挂载方式
use
路由
*/


const express=require('express');
const app=express();


app.get('/abc',(rea,res,next)=>{
	console.log(1);
	next('route');
},(req,res)=>{
	
	console.log(2);
	

	res.send('abc');

});


app.get('/abc',(req,res)=>{
	console.log(3);
	res.send('hello');
})


app.listen(3000,()=>{
	console.log('run...')
})