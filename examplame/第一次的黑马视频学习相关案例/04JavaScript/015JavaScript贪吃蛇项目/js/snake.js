/*自调用函数*//*开启一个新的局部作用域，避免命名冲突*/
/*定义在当前作用域的变量和函数就是私有成员*/
(function(){
	var position='absolute';
	/*记录上一次创建的每一个蛇节*/
	var elements=[];
	function Snake(options){
		options=options||{};
		this.width=options.width || 20;
		this.height=options.height ||20;
		this.direction=options.direction || 'right';

		this.body=[
			{x:3,y:2,color:'red'},
			{x:2,y:2,color:'blue'},
			{x:1,y:2,color:'blue'}
		];


	}

	Snake.prototype.render=function(map){
		//删除之前渲染的蛇
		remove();
		/*把每一个蛇节渲染到map中*/
		for(var i=0,len=this.body.length;i<len;i++){
			var object=this.body[i];
			var div=document.createElement('div');
			map.appendChild(div);
			elements.push(div);
			div.style.position=position;
			div.style.width=this.width+'px';
			div.style.height=this.height+'px';
			div.style.left=object.x*this.width+'px';
			div.style.top=object.y*this.height+'px';
			div.style.backgroundColor=object.color;
		}
	}
	//控制蛇移动的方法
	Snake.prototype.move=function(food,map){
		//1.控制蛇的身体移动（当前蛇节到上一个蛇节的位置）
		for(var i=this.body.length-1;i>0;i--){
			this.body[i].x=this.body[i-1].x;
			this.body[i].y=this.body[i-1].y;
		}
		//2.控制蛇头的移动
		//判断蛇的方向
		var head=this.body[0];
		switch(this.direction){
			case 'right':
				head.x+=1;
				break;
			case 'left':
				head.x-=1;
				break;
			case 'top':
				head.y+=1;
				break;
			case 'bottom':
				head.y-=1;
				break;
		}
		// 2.3当蛇遇到食物 做相应的处理
		//判断蛇头是否和食物的坐标一致
		var headX = head.x*this.width;
		var headY = head.y*this.height;
		if(headX==food.x && headY==food.y){
			// 让蛇增加一节
			//获取蛇的最后一节
			var last=this.body[this.body.length-1];
			// this.body.push({
			// 	x: last.x,
   //      		y: last.y,
   //      		color: last.color
			// })
			/*对象拷贝*/
			var obj={};
			extend(last,obj);
			this.body.push(obj);
			// 随机在地图上重新生成食物
			food.render(map);
		}
	}

	function extend(parent,child){
		for(var key in parent){
			if(child[key]){
				continue
			}
			child[key]=parent[key];
		}
	}
	/*私有成员*/
	function remove(){
		for (var i = elements.length - 1; i >= 0; i--) {
      // 删除div
      elements[i].parentNode.removeChild(elements[i]);
      // 删除数组中的元素
      elements.splice(i, 1);
    }
	}

	/*暴露构造函数给外部*/
	window.Snake=Snake;
})()
  /*/*测试
	var map=document.getElementById('map');
	var snake=new Snake();
 	snake.render(map);*/

