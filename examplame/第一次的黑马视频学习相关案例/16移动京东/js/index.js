window.onload=function(){
	
	searchEffset();
	timeBack();
	bannerEffect();
}

/*头部js*/
function searchEffset(){
	/*头部搜索块的效果*/
	/*1。获取当前banner的高度*/
	var banner=document.querySelector(".jd_banner");
	var bannerHeight=banner.offsetHeight;
	/*获取header*/
	var search=document.querySelector(".jd_search");

	
	/*2。获取当前屏幕滚动时，banner滚动出屏幕的距离*/
	window.onscroll=function(){

		
        var offsettop=document.documentElement.scrollTop;
        /*3.计算比例值，获取透明度，设置背景颜色的样式*/
        var opacity=0;
        /*如果banner还没完全滚出屏幕*/
        if(offsettop<bannerHeight){
        	opacity=offsettop/bannerHeight;
       		search.style.backgroundColor="rgba(233,35,34,"+opacity+")";
        }
        
      
    }
}

/*倒计时*/
function timeBack(){
	var spans=document.getElementsByClassName('jd_sk_time')[0].getElementsByTagName("span");
	//	var 设置初始的倒计时时间,以秒做单位
	var totalTime=10;
	var timeid=setInterval(function(){
		//得到剩余时间的时分秒
		totalTime--;
		if(totalTime<0){
			clearInterval(timeid);
			return
		}
		var hour=Math.floor(totalTime/3600);
		var minute=Math.floor(totalTime%3600/60);
		var second=Math.floor(totalTime%60);
		spans[0].innerHTML=Math.floor(hour/10);
		spans[1].innerHTML=Math.floor(hour%10);
		spans[3].innerHTML=Math.floor(minute/10);
		spans[4].innerHTML=Math.floor(minute%10);
		spans[6].innerHTML=Math.floor(second/10);
		spans[7].innerHTML=Math.floor(second%10);

	},1000);
}

/*轮播图*/
function bannerEffect(){
	//1.获取轮播图的结构
	var banner=document.querySelector('.jd_banner');
	//2.获取图片容器
	var imgBox=banner.querySelector('ul:first-of-type');
	//3.获取原始第一张图片
	var first=imgBox.querySelector('li:first-of-type');

	//4.获取原始最后一张图片
	var last=imgBox.querySelector('li:last-of-type');
	//5.在首尾插入图片
	imgBox.appendChild(first.cloneNode(true));
	imgBox.insertBefore(last.cloneNode(true),imgBox.firstChild);
	//5..获取所有li
	var lis=imgBox.querySelectorAll('li');
	//获取li元素数量
	var count=lis.length
	//6.获取banner宽度
	var bannerwidth=banner.offsetWidth;
	imgBox.style.width=count*bannerwidth+'px';
	//设置每个li元素的宽度
	for(var i=0;i<lis.length;i++){
		lis[i].style.width=bannerwidth+'px';
	}
	/*定义图片的索引*/
	var index=1;/*因为原始第一张图片前面加了一张图片，现在默认为1*/
	//设置默认偏移
	imgBox.style.left=-bannerwidth+'px';
	//当屏幕变化时，重新计算宽度

	window.onresize=function(){
		//6.获取banner宽度,覆盖全局的宽度值
		bannerwidth=banner.offsetWidth;
		imgBox.style.width=count*bannerwidth+'px';
		//设置每个li元素的宽度
		for(var i=0;i<lis.length;i++){
			lis[i].style.width=bannerwidth+'px';
		}
		//设置默认偏移
		imgBox.style.left=-bannerwidth*index+'px';
	}

	/*实现点标记*/
	function setIndicator(index){
		var indicators=banner.querySelector('ul:last-of-type').querySelectorAll('li');
		/*先清除所有li元素的样式*/
		for(var i=0;i<indicators.length;i++){
			indicators[i].classList.remove('active');

		}
		/*为当前li加active样式*/
		indicators[index-1].classList.add('active');
	}
	


	var timeId
	/*实现自动轮播*/
	var starttime=function(){
		timeId=setInterval(function(){
		/*变换索引*/
		index++;
		/*添加过渡效果*/
		imgBox.style.transition="left 0.5s ease-in-out";
		/*设置偏移*/
		imgBox.style.left=-bannerwidth*index+'px';
		setTimeout(function(){
				if(index==count-1){
				index=1;
				/*如果一个元素的某个属性添加过过渡属性，会一直存在*/
				imgBox.style.transition="none";
				/*偏移到指定的位置*/
				imgBox.style.left=-bannerwidth*index+'px';
			}
		},500);		
		},1000);
	}
	starttime();

	/*实现手动滑动轮播*/
	/*标记当前过渡效果是否已经执行完毕*/
	var isend=true;
	var startX,moveX,distanceX;
	/*为图片添加触摸事件*/
	imgBox.addEventListener("touchstart",function(e){
		clearInterval(timeId);
		startX=e.targetTouches[0].clientX;
	});
	imgBox.addEventListener("touchmove",function(e){
		if(isend==true){
			moveX=e.targetTouches[0].clientX;
			distanceX=moveX-startX;
			/*为了保证效果正常，要清除之前的过渡效果*/
			imgBox.style.transition="none";
			/*重大细节，本次的滑动操作，应该是基于之前偏移的距离，加上这次的距离*/
			imgBox.style.left=-index*bannerwidth+distanceX+'px';
		}
		
	});
	/*触摸结束事件*/
	imgBox.addEventListener('touchend',function(e){
		/*松开手指，标记当前的过渡效果正在执行*/
		isend=false;
		/*获取当前滑动的距离，判断距离是否超出指定的范围*/
		if(Math.abs(distanceX)>100){
			/*判断滑动方向*/
			if(distanceX>0){//上一张
				index--;
			}else{//下一张
				index++;
			}
			/*翻页*/
			imgBox.style.transition="left 0.5s ease-in-out";
			imgBox.style.left=-index*bannerwidth+'px';

		}else if(Math.abs(distanceX)>0){//保证用户确实进行滑动操作

			imgBox.style.transition="left 0.5s ease-in-out";
			imgBox.style.left=-index*bannerwidth+'px';
		}
		/*将move产生的数据为0*/
		startX=0;
		moveX=0;
		distanceX=0;
		//重新开启定时器
		starttime();

	});
	imgBox.addEventListener('webkitTransitionEnd',function(){
		/*如果到了最后一张(count-1)，就回到索引1*/
		/*如果到了第一张，就回到索引count-2*/
		if(index==count-1){
			index=1;
			/*清除过渡*/
			/*设置偏移*/
			imgBox.style.transition="none";
			imgBox.style.left=-index*bannerwidth+'px';
		}else if(index==0){
			index=count-2;
			/*清除过渡*/
			/*设置偏移*/
			imgBox.style.transition="none";
			imgBox.style.left=-index*bannerwidth+'px';
		};
		setIndicator(index);
		setTimeout(function(){
			isend=true;
			/*清除之前添加的定时器*/
			clearInterval(timeId);
			starttime();
		},500);
		
	});
}