$(function(){
	/*获取当前所有的item*/
	var items=$(".carousel-inner .item");

	/*监听屏幕大小的改变*/
	$(window).on('resize',function(){
		/*1。获取当前屏幕的宽度*/
		var width=$(window).width();
		/*2判断屏幕的宽度*/
		if(width>=768){//非移动端
			/*为每一个item添加元素*/
			$(items).each(function(index,value){	
				var item=$(this);
				/*获取自定义属性中存储的路径*/
				var imgSrc=item.data("largeImage");
				/*添加非移动端的子元素*/
				item.html($('<a href="javascript:;" class="pcImg"></a>').css('backgroundImage',"url('"+imgSrc+"')"));
			});
		}else{
			$(items).each(function(index,value){
				
				var item=$(this);
				/*获取自定义属性中存储的路径*/
				var imgSrc=item.data("smallImage");
				
				/*添加非移动端的子元素*/
				item.html('<a href="javascript:;" class="mobileImg hidden-sm hidden-md hidden-lg"><img src="'+imgSrc+'" alt="..."></a>')
				
			});
		}
	}).trigger('resize');



	/*添加移动端的滑动操作*/
  var startX,endX;
  var carousel_inner=$(".carousel-inner")[0];
  /*获取当前轮播图*/
  var carousel=$(".carousel");
  carousel_inner.addEventListener("touchstart",function(e){
      startX= e.targetTouches[0].clientX;
  });
  carousel_inner.addEventListener("touchend",function(e){
      endX= e.changedTouches[0].clientX;
      if(endX-startX > 0){
          /*上一张*/
          carousel.carousel('prev');
      }
      else if(endX-startX < 0){
          /*下一张*/
          carousel.carousel('next');
      }
  });
  /*初始化工具提示*/
   $('[data-toggle="tooltip"]').tooltip();


   /*计算产品块导航项的产品的宽度*/
   var ul=$(".wjs_product .nav-tabs");
   var lis=ul.find("li");
   var totalWidth=0;/*总宽度*/
   lis.each(function(index,value){
   		totalWidth=totalWidth+$(value).innerWidth();
   		/*获取宽度的方法说明*/
   		/*width（）只能得到当前元素的内容的宽度*/
   		/*innerWidth():能获得当前元素的内容+padding*/
   		/*outerWidth():能获取到当前的内容的宽度+padding+border*/
   		/*outerWidth(true):获取元素的内容的宽度+padding+border+margin*/
   });
  
   ul.width(totalWidth);
   /*使用插件实现导航条滑动*/
   var myscroll=new IScroll(".tabs_parent",{
   	/*设置水平滑动，不允许竖直滑动*/
   	scrollX:true,startY:false
   })
})