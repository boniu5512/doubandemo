<template>
	<div class="broadcast">
		<slot name="user"></slot>
		<div class="broadcast_content">
			<slot name="title"></slot>
			<slot name="content"></slot>
			<slot name="comment"></slot>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less">
	.broadcast{
		margin-top: 24/64rem;
	}
	.broadcast:last-of-type{
		margin-top: 0;
/*		margin-bottom: 75/64rem;*/
	}
	.broadcast_head{
		color: #999;
		font-size: 20/64rem;
		/*height: 44/64rem;*/
		line-height: 34/64rem;
		padding-left: 30/64rem;
		border-bottom: 1px solid #ccc;
		display: flex;
		i {
			display: inline-block;
			width: 48/64rem;
			height: 48/64rem;
			background:url(../assets/img/user.png) no-repeat;
		}
	}
	
	.broadcast_content {
		padding: 20/64rem;
	}
	
	.content_head {
		.title{
			font-size: 14px;
			span {
				color: #999;
			}
		}
		.title1 {
			font-size: 14px;
			span {
				color: #999;
			}
		}
		.time {
			color: #999;
			font-size: 12px;
		}
		&::before {
			content: '';
			display: inline-block;
			clear: both;
			width: 48/64rem;
			height: 48/64rem;
			
			float: left;
			background: url(../assets/img/dou.png) no-repeat;
		}
	}
	.content_con{
		margin: 10/64rem 15/64rem 20/64rem 46/64rem;
		padding: 16/64rem;
		
		background-color: #f9f9f9;
		border-radius: 4px;
		p:first-child{
			font-size: 14px;
		}
		p:last-child{
			color: #999;
			font-size: 12px;
			overflow:hidden; 
			text-overflow:ellipsis;
			display:-webkit-box; 
			-webkit-box-orient:vertical;
			-webkit-line-clamp:2;
		}
	}
	.content_foot{
		color: #999;
		font-size: 14px;
		margin-left: 46/64rem;
		margin-right: 15/64rem;
		span{
			margin-right: 40/64rem;
			display: inline-block;
			padding-left: 24/64rem;
			background: url(../assets/img/11.png) no-repeat;
		}
		span:nth-of-type(1){
			background-position: 0 -3px;
		}
		span:nth-of-type(2){
			background-image: url(../assets/img/22.png);
		}
		span:nth-of-type(3){
			background-image: url(../assets/img/22.png);
		}
		a{
			float: right;
			color: #999;
			text-decoration: none;
			font-size: 30/64rem;
		}
	}
</style>