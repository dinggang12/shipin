/*生成某一个区间的随机数*/
(function(){
	var Tools={
		getRandom:function(min,max){
			return Math.floor(Math.random()*(max-min+1))+min
		}
	}
	window.Tools=Tools;
})()


