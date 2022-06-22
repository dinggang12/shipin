/*
	路由
*/


const express=require('express');

const app=express();


app.get('/',(req,res)=>{
	res.send('get data');
})

app.post('/',(req,res)=>{
	res.send('post data');
})
app.selete('/',(req,res)=>{
	res.send('delete data');
})
app.put('/',(req,res)=>{
	res.send('put data');
})

app.listen(3000,()=>{
	console.log('reun...');
});