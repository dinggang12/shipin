/*
封装操作数据库的通用api

 */

//加载数据库驱动
const mysql      = require('mysql');

exports.base=(sql,data,callback)=>{
	//创建数据库链接
	const connection = mysql.createConnection({
	  host     : 'localhost',//数据库所在的服务器的ip或者域名
	  user     : 'root',//登录数据库的账号
	  password : '',//登录数据库的密吗
	  database : 'mybook'//数据库的名称
	});
	//执行链接操作
	connection.connect();


	//操作数据库(数据库操作也是异步的)
	connection.query(sql,data, function (error, results, fields) {
	  if (error) throw error;
	  	callback(results);
	  
	});
	//关闭数据库
	connection.end();
}

