/*初步请求路径的分发*/


const http=require("http");

let server=http.createServer();

server.on('request',(req,res)=>{
	if(req.url.startsWith('/index')){
		
		res.end('index');
	}else if(req.url.startsWith('/about')){
		res.end('about');
	}else{
		res.end('不存在','utf8');
	}
	
});


server.listen(3000);