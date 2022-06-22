/*自调用函数*//*开启一个新的局部作用域，避免命名冲突*/
(function () {
	var that;/*记录游戏对象*/
	function Game(map){
		
		this.food=new Food();
		this.snake=new Snake();
		this.map=map;
		that=this;

	}
	Game.prototype.start=function(){
		//1.把蛇和实物对象，渲染到地图上
		this.food.render(this.map);		
		this.snake.render(this.map);
		//2.1让蛇移动起来
		runSnake();
		// 2.3通过键盘控制蛇移动的方向
		bindKey();
		
	
	}

	function bindKey(){
		//document.onkeydown=function(){}
		document.addEventListener('keydown',function(e){
			// 37-left
			// 38-bottom
			// 39-right
			// 40-top
			switch(e.keyCode){
				case 37:
					this.snake.direction='left';
					break;
				case 38:
					this.snake.direction='bottom';
					break;
				case 39:
					this.snake.direction='right';
					break;
				case 40:
					this.snake.direction='top';
					break;
			}
		}.bind(that),false);
	}
	/*私有函数*/
	function runSnake(){
		//2.开始游戏的逻辑
		// 2.1让蛇移动起来
		var timerId=setInterval(function(){
			//让蛇往前走一格
			//定时器的function中this指向window对象
			//要获取游戏对象的蛇属性
			this.snake.move(this.food,that.map);
			this.snake.render(this.map);
			// 2.2当蛇遇到边界游戏结束
			//获取蛇头的坐标
			var maxX=this.map.offsetWidth/this.snake.width;
			var maxY=this.map.offsetHeight/this.snake.height;
			var headX=this.snake.body[0].x;
			var headY=this.snake.body[0].y;
			if(headX<0 || headX>=maxX){
				alert('Game Over');
				clearInterval(timerId);
			}
			if(headY<0 || headY>=maxY){
				alert('Game Over');
				clearInterval(timerId);
			}
		}.bind(that),150);
		

		
		
		
	}
	window.Game=Game;
})();


