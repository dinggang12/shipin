/*初步实现服务器功能*/


const http=require("http");

let server=http.createServer();

server.on('request',(req,res)=>{
	res.end('hello');
});


server.listen(3000);