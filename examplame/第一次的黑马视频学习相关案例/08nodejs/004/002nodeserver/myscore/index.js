/*动态网站*/
/*成绩查询功能*/


const http=require('http');
const path=require('path');
const fs=require('fs');
const querystring=require('querystring');
const scoreData=require('./scores.json');//后台数据库
const template=require('art-template');

//服务器功能
http.createServer((req,res)=>{
	//路由（请求路径+请求方式）
	//查询成绩的入口地址  /query
	if(req.url.startsWith('/query') && req.method=='GET'){
		let content=template(path.join(__dirname,'view','index.art'),{});
			res.end(content);
	}else if(req.url.startsWith('/score') && req.method=='POST'){
		let pdata='';
		req.on('data',(chunk)=>{
			pdata+=chunk;
		});
		req.on('end',()=>{
			let obj=querystring.parse(pdata);
			let result=scoreData[obj.code];
			let content=template(path.join(__dirname,'view','result.art'),result);
			res.end(content);
			
			
		});
	}else if(req.url.startsWith('/all') && req.method=='GET'){
		let content=template(path.join(__dirname,'view','list.art'),{});
		res.end(content);
	}

	//获取成绩的结果 /score
}).listen(3000,()=>{
	console.log('running...');
});