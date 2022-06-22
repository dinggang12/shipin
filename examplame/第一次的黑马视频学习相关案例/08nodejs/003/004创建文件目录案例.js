/*
文件操作案例
*/
/*初始化目录结构*/
const path=require('path');
const fs=require('fs');

let root='C:\\Users\\lenovo\\Desktop';
let fileContent=`
	ladf<div></div>
`
//初始化数据
let initData={
	projectName:'mydemo',
	data:[
		{
			name:'img',
			type:'dir'
			},
		{
			name:'css',
			type:'dir'
			},
		{
			name:'js',
			type:'dir'
			},
		{
			name:'index.html',
			type:'file'
	}]
}
//创建项目根路径

fs.mkdir(path.join(root,initData.projectName),(err)=>{
	if(err) return ;
	//创建子目录
	initData.data.forEach((item)=>{
		if(item.type=='dir'){
			fs.mkdirSync(path.join(root,initData.projectName,item.name));

		}else if(item.type=='file'){
			fs.writeFileSync(path.join(root,initData.projectName,item.name),fileContent);
		}
	})
})