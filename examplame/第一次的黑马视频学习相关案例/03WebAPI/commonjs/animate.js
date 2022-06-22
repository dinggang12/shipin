function animate(element,target){

	if(element.timeid){
		clearInterval(element.timeid);
		element.timeid=null;
	}

	element.timeid=setInterval(function(){
		var step=10;
		 //当前盒子的位置
		var current=element.offsetLeft;
		//当400到800执行动画
		//当800到400不执行动画
		//判断盒子当前的位置是否达到500
		if(current>target){
		step=-Math.abs(step);
		}
			 	

		if(Math.abs(current-target)<Math.abs(step)){
			clearInterval(element.timeid);
			 //设置横坐标的为500
			 element.style.left=target+'px';
			 return
		}
		//移动盒子
		current+=step;
		element.style.left=current+'px';
	},5);
}