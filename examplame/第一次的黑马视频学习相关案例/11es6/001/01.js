
const fs=require('fs');

// var promise=new Promise(function(){
// 	fs.readFile('./1.txt','utf-8',(err,dataStr)=>{
// 		if(err) throw err
// 		console.log(dataStr);
// 	})
// })

function getFilePath(fpath){
	var promise=new Promise(function(resolve,reject){
		fs.readFile(fpath,'utf-8',(err,dataStr)=>{
			// if(err) throw err
			// console.log(dataStr);
			if(err)  return reject(err)
			resolve(dataStr)
		})
	})
}


getFilePath('./1.txt');