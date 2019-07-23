<template>
	<div class="listWrap">
			<div class="list_left">
				<slot name="list"></slot>
			</div>
			<div class="list_right">
				<img :src="url"/>
			</div>
		</div>
</template>
<script>
	export default {
		props:["url"]
	}
</script>

<style lang="less">
	.listWrap{
		padding: 16/64rem;
		display: flex;
		border-bottom: 1px solid #ccc;
		height: 150/64rem;
	}
	.listWrap:last-of-type{
		margin-bottom: 66/64rem;
	}
	.list_left{
		width: 65%;
		margin-right: 8/64rem;
	}
	.list_left h3{
		font-size: 14px;
		line-height: 25/64rem;
	}
	.list_left p{
		font-size: 12px;
		color: #666;
		margin: 8/64rem 0;
		line-height: 20/64rem;
		overflow:hidden; 
		text-overflow:ellipsis;
		height: 60/64rem;
	}
	.list_left p.author{
		color: #999;
		height: 20/64rem;
	}
	.list_right{
		width: 35%;
	}
	.list_right img{
		width: 100%;
		height: 100%;
	}
</style>