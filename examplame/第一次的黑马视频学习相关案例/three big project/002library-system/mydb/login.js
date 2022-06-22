/*登录验证*/

/*前端+后端+mysql*/

const express=require('express');
const bodyParser=require('body-parser');
const db=require('./db.js');

const app=express();
///处理表单提交的数据
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.post('/check',(req,res)=>{
	let param=req.body;
	let sql='select count(*) as total from user where username=? and password=?';
	let data =[param.username,param.password];
	db.base(sql,data,(result)=>{
		if(result[0].total==1){
			res.send('login success');
		}else{
			res.send('login failure');
		}

	});
});

app.listen(3000,()=>{
	console.log('run...');
})