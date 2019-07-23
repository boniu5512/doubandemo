<template>
	<div class="ItemWarp" @click="fn">
		<span v-show="!flag"><slot name="normalImg"></slot></span>
		<span v-show="flag"><slot name="activeImg"></slot></span>
		<span :class="{isColor:flag}">{{title}}</span>
	</div>
</template>
<script>
export default{
 props:["title","mark","curr"],
 computed:{
	 flag(){
		 if (this.mark==this.curr) {
		 	return true;
		 }
		 return false
	 }
 },
 methods:{
	 fn(){
		 this.$emit("sendV",this.mark)
		 this.$router.push("/"+this.mark)
	 }
 }
}
</script>

<style lang="less">
	.ItemWarp{
		flex: 1;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
	}
	.ItemWarp img{
		width:60%;
	}
	.ItemWarp span{
		width: 100%;
		font-size: 14/64rem;
		color: dimgray;
	}
	.isColor{
		color:#42bd56!important;
	}
</style>
