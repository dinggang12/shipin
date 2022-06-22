/*响应完整的页面信息*/
const http=require("http");
const path=require('path');
const fs=require('fs');

//根据路径读取文件的内容，并且响应到浏览器
let readFile=(url,res)=>{
	fs.readFile(path.join(__dirname,'www',url),'utf8',(err,fileContent)=>{
		if(err){
			res.end('server error');
		} else{
			res.end(fileContent);
		}

	});


}

let server=http.createServer();

server.on('request',(req,res)=>{
	//处理分发路径
	if(req.url.startsWith('/index')){
		readFile('index.html',res);
		
	}else if(req.url.startsWith('/about')){
		readFile('about.html',res);
	}else if(req.url.startsWith('/list')){
		readFile('list.html',res);
	}else{
		res.writeHead(200,{
			'Content-Type':'text/plain;charset=utf8'
		})
		res.end('页面被狗阿萨德');
	}
	
});

server.listen(3000);