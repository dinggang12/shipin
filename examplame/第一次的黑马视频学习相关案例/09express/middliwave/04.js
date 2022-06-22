
const express=require('express');
const app=express();
/*参数处理*/

const bodyParser=require('body-parser');


//启用中间件
app.use(express.static('public'));

//挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//处理json格式数据

app.get('/login',(req,res)=>{
	let data=req.query;
	console.log(data);
	res.send('get data');
})

app.post('/login',(req,res)=>{
	let data=req.body;
	if(data.username=='admin'&&data.password=='123'){
		res.send('success');
	}else{
		res.send('failure');
	}

});

app.listen(3000,()=>{
	console.log('y.')
})