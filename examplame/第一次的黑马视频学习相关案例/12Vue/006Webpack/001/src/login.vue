<template>
	<div>
		<h1>这是登录组件1{{msg}}</h1>
	</div>
</template>




<script>

	export default{
		data(){
			return {
				msg:123
			}
		},
		methods:{
		show(){
			consoel.log('调用了login。vue中的show方法')
		}
		}	
	}
</script>


<style></style>