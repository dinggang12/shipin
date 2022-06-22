/*更新数据*/

//加载数据库驱动
const mysql      = require('mysql');

//创建数据库链接
const connection = mysql.createConnection({
  host     : 'localhost',//数据库所在的服务器的ip或者域名
  user     : 'root',//登录数据库的账号
  password : '',//登录数据库的密吗
  database : 'book'//数据库的名称
});
//执行链接操作
connection.connect();

let sql='update  book set name=?,author=?,category=?,description=? where id=?';
let data=['浪潮之巅','吴军','计算机','IT巨头的兴衰试',5];

 //操作数据库
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  if(results.affectedRows==1){
  	console.log('数据更新成功');
  }
});
 //关闭数据库
connection.end();