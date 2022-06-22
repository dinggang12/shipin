function Box(parent,options){//参数多的时候，可以放在对象里
	//设置对象的属性
	options=options || {};
	this.backgroundColor=options.backgroundColor||'red';
	this.width=options.width||20;
	this.height=options.height||20;
	this.x=options.x||0;
	this.y=options.y||0;

	this.parent=parent;
	/*创建对应的div*/
	this.div=document.createElement('div');
	this.parent.appendChild(this.div);

	/*设置div样式*/
}

/*初始化div（方块）的样式*/
Box.prototype.init=function(){
	var div=this.div;
	div.style.backgroundColor=this.backgroundColor;
	div.style.width=this.width+'px';
	div.style.height=this.height+'px';
	div.style.left=this.x+'px';
	div.style.top=this.y+'px';
	div.style.position='absolute';
}

/*让方块有随机生成位置的能力*/
Box.prototype.random=function(){
	var x=tools.getRandom(0,this.parent.offsetWidth/this.width-1)*this.width;
	var y=tools.getRandom(0,this.parent.offsetHeight/this.height-1)*this.height;
	this.div.style.left=x+'px';
	this.div.style.top=y+'px';
}