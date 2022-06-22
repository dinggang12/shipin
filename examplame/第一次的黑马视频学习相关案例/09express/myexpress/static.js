/*托管静态文件*/


const express=require('express');


const app=express();


let server=app.use('/abc',express.static('public'));

app.use(express.static('hello'));


server.listen(3000,()=>{
	console.log('runn...');
})