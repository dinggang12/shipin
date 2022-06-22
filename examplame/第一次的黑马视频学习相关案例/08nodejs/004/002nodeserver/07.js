
const http = require('http');
const ss = require('./06.js');
const path = require('path');

http.createServer((req,res)=>{
    // ss.staticServer(req,res,path.join(__dirname,'www'));
    ss.staticServer(req,res,path.join('C:\\Users\\www\\Desktop','test'));
}).listen(3000,()=>{
    console.log('running....');
})