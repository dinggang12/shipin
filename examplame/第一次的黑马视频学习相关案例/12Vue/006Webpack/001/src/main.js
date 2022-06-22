/*这里的main。js是项目的js入口文件*/

// /*/*/*导入jquery*/

// /*es6中导入模块的方式*/
// import $ from 'jquery'
// //由于es6的代码，浏览器解析不了，这一行会有问题


// import './css/index.css'
// import 'bootstrap/dist/css/bootstrap.css'

// //webpack.默认只能打包js类型的文件，无法处理其他非Js类型的文件
// //处理非js类型的文件，手动安装一些第三方的loader加载器
// //1.需要安装npm i style-loader css-loader -D
// //2.打开webpack.config.js配置文件，新增一个配置节点，叫做module,它是一个对象；
// //在这个对象身上有一个rules属性，这个rules属性是个数组，这个数组存放了，所有第三方文件的匹配和处理规则
// $(function(){
// 	$('li:even').css('backgroundColor','yellow')

// 	$('li:odd').css('backgroundColor',function(){
// 		return '#'+'D97634'
// 	})

// 	class Person{
// 		static info={name:'zs',age:20}
// 	}
// 	console.log(Person.info)
// })

// */*/
// import Vue from '../node_modules/vue/dist/vue.js'



// // var login={
// // 	template:'<h1>大江大河撒的谎1</h1>'
// // }

// // 导入login组件
// /*import login from'./login.vue'*/

// var vm=new Vue({
// 	el:"#app",
// 	data:{
// 		msg:111
// 	},
// 	render: http://localhost:3000/#/goodslistc=> c(login)
	
// })
import Vue from '../node_modules/vue/dist/vue.js'
import router from './router.js'
import app1 from './app.vue'


var vm=new Vue({
	el:'#app',
	data:{
		msg:111
	},
	render:c=>c(app1),
	router//将路由对象挂载
})
