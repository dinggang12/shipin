/*
    实现图书管理系统后台接口
*/

const bodyParser = require('body-parser');
const router = require('./router.js');

const express = require('express');
const app = express();

app.use('/www',express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.listen(3000,()=>{
    console.log('running...');
});