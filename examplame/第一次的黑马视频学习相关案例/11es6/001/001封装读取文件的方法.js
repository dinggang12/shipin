//你要封装一个方法，我给你一个读取文件的路径，你这个方法能帮我读取文件，并把内容返回给我


const fs=require('fs')

const path=require('path')

// fs.readFile(path.join(__dirname,'./1.txt'),'utf-8',(err,dataStr)=>{

// 	if(err) throw err;
// 	console.log(dataStr);
// })

//给路径，返回读取的内容
//可以规定一下，callback有两个参数，第一个参数是失败的结果，第二参数是成功的结果
//如果成功，返回的结果位于callback参数的第二个位置，第一个没有出错，放一个null,如果失败了第一个位置放error对象
//第二个放一个undefined
function getFilePath(fpath,callback){
	console.log(3);
	fs.readFile(fpath,'utf-8',(err,dataStr)=>{//异步方法
		if(err)  return callback(err);
		// console.log(dataStr);
		// return dataStr
		callback(null,dataStr);
	});
	console.log(2);

}

getFilePath(path.join(__dirname,'./1.txt'),(err,dataStr)=>{
	if(err) return console.log(err.message)
	console.log(dataStr);
});
console.log(31);
