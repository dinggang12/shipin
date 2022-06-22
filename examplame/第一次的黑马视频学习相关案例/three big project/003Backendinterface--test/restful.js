/*
restful.js api 是从URL的格式来表述的

 */


const db=require('./db.js')
const express=require('express');
const app=express();

// app.get('/books',(req,res)=>{
	
// 	let sql='select * from book';
	
// 	db.base(sql,null,(result)=>{
// 		res.json(result);
// 	});
// });


//http:/localhost:3000/books/book/1
app.get('/books/book/:id',(req,res)=>{
	
	let id=req.params.id;
	let sql='select * from book where id=?';
	let data=[id];
	db.base(sql,data,(result)=>{
		res.json(result[0]);
	});
});


app.listen(3000,()=>{
	console.log('....');
})