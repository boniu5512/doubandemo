<template>
	<div class="tvList">
		<h3>热播新剧</h3>
		<div class="model">
			<div class="model2" v-for="(item,index) in arr2" :key="index">{{item.model}}</div>
		</div>
		<div class="list_con" v-for="(item,index) in arr" :key="index" v-show="index<=8">
			<div class="list_img">
				<a href="#"><img :src="item.cover" /></a>
			</div>
			<div class="title">{{item.title}}</div>
			<div class="score">{{item.rate}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [],
				arr2: []
			}
		},
		mounted() {
			this.$axios.get("../../static/data/tv.json")
				.then(res => {
					console.log(res.data.subjects);
					this.arr = res.data.subjects;
					this.arr2 = res.data.list;
				})
		}
	}
</script>

<style lang="less" scoped>
	.tvList {
		overflow: hidden;
		margin-bottom: 78/64rem;
		padding-left: 6/64rem;
	}
	
	h3 {
		padding: 10/64rem 0;
		font-size: 24/64rem;
	}
	.model{
		overflow: hidden;
		margin-right: 6/64rem;
		padding-bottom: 4/64rem;
		border-bottom: 1px solid #ccc;
	}
	.model2 {
		color: #999;
		font-size: 16/64rem;
		float: left;
		margin-right: 12/64rem;
	}
	.active{
		color: #000;
		border: 2px solid #000;
	}
	.list_con {
		float: left;
		text-align: center;
		margin: 8/64rem 6/64rem;
		font-size: 16/64rem;
	}
	
	.title {
		width: 120/64rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.score {
		color: #999;
		font-size: 12px;
	}
	
	.list_img img {
		width: 120/64rem;
		height: 180/64rem;
	}
</style>