<template>
	<div>
		<p>正在上映的电影-北京</p>
		<div class="filmList">
			<div class="list_con" v-for="(item,index) in arr" :key="index">
				<div class="list_img">
					<a href="#"><img :src="item.cover_url" /></a>
				</div>
				<div class="title">{{item.title}}</div>
				<div class="score">评分：{{item.score}}</div>
			</div>
		</div>
		<p>即将上映的电影</p>
		<div class="filmList">
			<div class="list_con" v-for="(item,index) in arr2" :key="index">
				<div class="list_img">
					<a href="#"><img :src="item.cover_url" /></a>
				</div>
				<div class="title">{{item.title}}</div>
				<div class="score">评分：{{item.score}}</div>
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
			this.$axios.get("../../static/data/broadcast.json")
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
	.nav_content {
		width: 100%;
		position: relative;
		margin-bottom: 88/64rem;
		/*height: 100%;*/
		p {
			padding: 14/64rem;
			font-size: 18/64rem;
		}
		div {
			font-size: 16/64rem;
		}
		.title {
			overflow: hidden;
			text-overflow: ellipsis;/*文字多余的点点点*/
			white-space: nowrap;
		}
		.score {
			color: #999;
			font-size: 14/64rem;
		}
	}
	.filmList {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		padding-left: 13/64rem;
		flex-wrap: nowrap;/*在必要的时候拆行*/
		overflow: scroll;
	}
	.list_con {
		width: 33%;
		text-align: center;
		margin-right: 12/64rem;
	}
	.list_img img {
		width: 120/64rem;
		height: 180/64rem;
	}
</style>