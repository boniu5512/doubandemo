<template>
	<div>
		<div class="readlist">
			<p>豆瓣书单<span>全部 454</span></p>
			<div class="list_con" v-for="(item,index) in arr" :key="index">
				<div class="list_img">
					<a href="#"><img :src="item.cover_url" /></a>
				</div>
				<div class="txt">
					<div class="title">{{item.title}}</div>
					<span class="num">{{item.num}}本</span>
					<span class="score">{{item.score}}人关注</span>&nbsp;
					<div class="author">{{item.author}} <span>创建</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["url"],
		data() {
			return {
				arr: [],
				arr2: []
			}
		},
		mounted() {
			//请求json数据
			this.$axios.get("../../static/data/read.json")
				.then(res => {
					console.log(res)
					this.arr = res.data.recommend_one;
					this.arr2 = res.data.recommend_two;
					console.log(this.arr)
				}).catch(res => {
					console.log(err)
				})
		}
	}
</script>

<style lang="less" scoped="scoped">
	.readlist {
		padding: 0 12/64rem;
		margin-bottom: 78/64rem;
		>p{
			padding: 10/64rem;
			font-weight: bold;
			font-size: 20/64rem;
			span{
				float: right;
				font-size: 14/64rem;
				font-weight: normal;
			}
		}
	}
	
	.list_con {
		display: flex;
		padding: 10/64rem 0;
		border-bottom: 1px solid #ccc;
	}
	
	.txt{
		margin-left: 12/64rem;
		.title{
			/*font-weight: bold;*/
			font-size: 16/64rem;
		}
		.score,.num{
			font-size: 12/64rem;
			color: #999;
			line-height: 26/64rem;
			margin-top: 14/64rem;
		}
		.author{
			font-size: 16/64rem;
			margin-top: 14/64rem;
			span{
				color: #999;
			}
		}
	}
	.list_img img {
		width: 90/64rem;
		height: 110/64rem;
	}
</style>