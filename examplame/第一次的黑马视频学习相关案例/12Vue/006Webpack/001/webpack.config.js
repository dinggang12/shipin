/*这个配置文件就是js文件，通过Node中的模块操作，向外暴露 一个配置对象*/

const webpack=require('webpack');//启用热更新第二步
const path=require('path');
const  htmlWebpackPlugin=require('html-webpack-plugin');
module .exports={
	entry:path.join(__dirname,'./src/main.js'),//入口，表示要使用webpack打包哪个文件
	output:{//输出文件相关的配置
		path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
		filename:'bundle.js'//指定输出文件的名称
	},
	devServer:{//这是配置dev-server命令参数的第二种形式，麻烦一些
		//--open --port 3000 --contentBase src --hot
		open:true,//自动打开浏览器
		port:3000,//设置启动时候的端口
		/*contentBase:'src',*///指定托管的根目录
		hot :true//启用热更新的第一步
	},
	plugins:[//配置插件的节点
		new webpack.HotModuleReplacementPlugin(),//new 一个热更新的模块对象，这是热更新的第三步

		new htmlWebpackPlugin({//创建一个在内存中生成HTML页面的插件
			//根据指定的模板页面生成内存中的页面
			template:path.join(__dirname,'./src/index.html'),
			//指定生成页面的名称
			filename:'index.html'
		})
	],
	module:{//这个节点，用于配置所有第三方模块加载器
		rules:[//所有第三方模块的匹配规则
			{ test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader
			/*{test:/\.css$/,use:['style-loader','css-loader']},//匹配处理。css文件的第三方loade规则
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=111&name=[hash:8]-[name].[ext]'},
			{test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},*/
		]

	},
	resolve:{
		/*alias:{"vue$":"vue/dist/vue.js"}*/
	}
}