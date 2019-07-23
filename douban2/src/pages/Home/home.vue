<template>
  <div >
	<Header setGreen="true">
			<img src="../../assets/ic_chat_white.png" slot="rImg" class="rImg" >
			<div slot="search" class="search">
					<img src="../../assets/ic_group_search_small.png" class="s_l">
					<input type="text" placeholder="影观 图书 唱片 小组等">
					 <img src="../../assets/ic_scan_gray.png" class="s_r">
			</div>
	</Header>
	<Banner swiperID="swiper_one" paginationType="fraction" :iShowpagination="true" >
		<div class="swiper-slide" >
			<img src="../../assets/banner/01.jpg">
		</div>
		<div class="swiper-slide">
			<img src="../../assets/banner/02.jpg">
		</div>
		<div class="swiper-slide">
			<img src="../../assets/banner/03.jpg">
		</div>
	</Banner>
	
	<!--调用显示数据组件-->
	<NewsList v-for="(item,index) in arr" :key="index" :url="item.target.cover_url">
			<div slot="list">
				<h3>{{item.title}}</h3>
				<p>{{item.target.desc}}</p>
				<p class="author">作者：{{item.target.author.name}}</p>
			</div>
		</NewsList>
  </div>
</template>

<script>
import Banner from "../../components/Banner"
import Header from "../../components/Header"
import NewsList from "../../components/NewsList"
export default{
	components:{
		Header,Banner,NewsList
	},
	data(){
			return {
				arr:[]
			}
		},
		mounted(){
			this.getData();
		},
	methods:{
		getData(){
			this.$axios.get('../../../static/data/homeData.json')
			.then(res=>{
				console.log(res);
				this.arr=res.data.recommend_feeds;
				console.log(this.arr)
			}).catch(res=>{
					console.log(err)
				})
		}
	}
}
</script>


<style scoped>

</style>
