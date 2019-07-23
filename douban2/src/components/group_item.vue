<template>
	<div class="group_con">
		<div v-for="(item,index) in arr" :key="index">
			<h4 class="title">{{item.title}}</h4>
			<div class="content" v-for="(item,index) in item.group_list" :key="index">
				<div class="content_in">
					<img :src="item.img_url"/>
					<span class="name">{{item.group_name}}</span>
					<span class="member">{{item.group_member}}</span>
				</div>
				<p>{{item.topic_title}}</p>
			</div>
			<a href="#" class="more">更多相关小组</a>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				arr:[]
			}
		},
		mounted() {
			//请求json数据
			this.$axios.get("../../static/data/groupData.json")
				.then(res => {
					console.log(res.data)
					this.arr = res.data.group;
				}).catch(res => {
					console.log(err)
				})
		}
	}
</script>

<style lang="less">
	.group_con{
		margin-top: 20/64rem;
		margin-bottom: 80/64rem;
		>div{
			margin-bottom: 20/64rem;
			padding: 0 10/64rem;
		}
	}
	.title{
		font-size: 20/64rem;
		/*padding: 12/64rem 0 12/64rem 14/64rem;*/
	}
	.content{
		color: #999;
		font-size: 18/64rem;
		padding: 12/64rem;
		overflow: hidden;
		border-bottom: 1px solid #ccc;
		.content_in{
			display: flex;
			height: 50/64rem;
			line-height: 50/64rem;
			position: relative;
		}
		img{
			width: 50/64rem;
			height: 50/64rem;
		}
		.name{
			color: #000;
			font-size: 14px;
			margin-left: 10/64rem;
		}
		.member{
			margin-left: 100/64rem;
			position: absolute;
			top: 0;
			right: 16/64rem;
		}
		p{
			line-height: 36/64rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	.more{
		color: #45bd59;
		font-size: 14px;
		text-align: center;
		padding: 20/64rem 0;
		display: block;
		text-decoration: none;
	}
</style>