<template>
	<div>
		<div class="muList" v-for="(item,index) in arr" :key="index">
			<p>{{item.title}}
				<a href="#" class="more2">全部</a>
			</p>
			<div class="muList_con">
				<div class="muList_in" v-for="(item,index) in item.group_list" :key="index">
					<div class="list_img2"><img :src="item.cover_url" /></div>
					<div class="title">{{item.title}}</div>
					<div class="author">{{item.author}}</div>
					<div class="score">评分：{{item.score}}</div>
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
			this.$axios.get("../../static/data/music.json")
				.then(res => {
					console.log(res.data)
					this.arr = res.data.group;
				}).catch(res => {
					console.log(err)
				})
		}
	}
</script>
<style lang="less" scoped="scoped">
	
	.muList {
		&:last-of-type{
			margin-bottom: 88/64rem;
		}
		p {
			width: 100%;
			box-sizing: border-box;
			padding: 10/64rem;
			font-size: 16px;
		}
		.muList_con {
			padding-bottom: 20/64rem;
			display: flex;
			width: 100%;
			box-sizing: border-box;
			padding-left: 12/64rem;
			flex-wrap: nowrap;
			overflow: scroll;
			&::-webkit-scrollbar {
				display: none;
			}
			.muList_in {
				text-align: center;
				margin-right: 12/64rem;
				.title {
					width: 120/64rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.title {
					font-size: 14px;
				}
				.author,
				.score {
					color: #999;
					font-size: 12px;
				}
				&:last-of-type {
					padding-right: 12/64rem;
				}
			}
		}
	}
	
	.more2 {
		float: right;
		color: green;
		font-size: 14px;
	}
	
	.list_img2 img {
		width: 120/64rem;
		height: 120/64rem;
	}
</style>