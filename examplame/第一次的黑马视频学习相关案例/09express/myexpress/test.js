const express=require('express');

const app=express();




// app.get('/',(req,res)=>{
// 	res.send('ok');
// }).listen(3000,()=>{
// 	console.log('runn....');
// })


let server=app.get('/',(req,res)=>{
	res.send('abc');
});

server.listen(3000,()=>{
	console.log('runn...');
});