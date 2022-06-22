const express=require('express');
const app=express();


const bodyParser=require('body-parser');


//启用中间件
app.use(express.static('public'));

//挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({extended:false}));

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