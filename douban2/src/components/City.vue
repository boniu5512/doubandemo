<template>
	<div>
		<div class="city_list" v-for="(item,index) in arr">
			<div class="model">
				{{item.title}}
				<div class="model_item">
					<span v-for="(item,index) in item.group_model">
						{{item.model}}
					</span>
				</div>
			</div>
			<div class="list_con" v-for="(item,index) in item.group_list">
				<div class="left"><img :src="item.img_url" /></div>
				<div class="right">
					<div class="name">{{item.group_name}}</div>
					<p>{{item.group_time}}</p>
					<p class="adderss">{{item.group_address}}</p>
					<p>{{item.group_member}}人关注</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: []
			}
		},
		mounted() {
			this.$axios.get("../../static/data/city.json")
				.then(res => {
					console.log(res);
					this.arr = res.data.group;
					console.log(this.arr);
				}).catch(res => {
					console.log(err);
				})
		}
	}
</script>
<style lang="less" scoped="scoped">
	.city_list {
		padding: 12/64rem;
	}
	
	.model {
		height: 32/64rem;
    	line-height: 32/64rem;
		display: flex;
		font-size: 18/64rem;
		padding-bottom: 6/64rem;
		border-bottom: 1px solid #ccc;
	}
	
	.model_item{
		margin-left: 20/64rem;
		span{
			color: green;
			font-size: 14px;
			padding: 2/64rem 8/64rem;
			margin-right: 15/64rem;
			border: 1px solid green;
		}
	}
	
	.list_con {
		width: 100%;
		padding: 12/64rem 0;
		display: flex;
		font-size: 12px;
		color: #999;
		.right {
			width: 70%;
			margin-left: 10/64rem;
			.name {
				color: #000;
				font-size: 14px;
				margin-bottom: 4/64rem;
			}
			.adderss{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>