//你要封装一个方法，我给你一个读取文件的路径，你这个方法能帮我读取文件，并把内容返回给我


const fs=require('fs')

const path=require('path')


function getFilePath(fpath,succCb,errCb){
	fs.readFile(fpath,'utf-8',(err,dataStr)=>{//异步方法
		if(err)  return errCb(err);
		
		succCb(dataStr);
	})

}

// getFilePath(path.join(__dirname,'./1.txt'),function(data){
// 	console.log(data);
// },function(err){
// 	console.log(err.message);
// })

//需求：县杜曲文件1 ，再读取文件2，再读取文件3


getFilePath(path.join(__dirname,'./1.txt'),function(data){
	console.log(data);
	getFilePath(path.join(__dirname,'./2.txt'),function(data){
		console.log(data);
		getFilePath(path.join(__dirname,'./3.txt'),function(data){
			console.log(data);
	})
	})
})

//使用promise解决回调地域，promise的本质，就是为了解决回调地域问题，并不能减少代码量

//.then

