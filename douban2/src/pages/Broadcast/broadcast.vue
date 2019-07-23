<template>
  <div >
			<Header title="广播">
				<img src="../../assets/ic_status_search_user.png" slot="lImg" class="lImg">
					<img src="../../assets/ic_chat_green.png" slot="rImg" class="rImg">	
			</Header>
			<broadcast_item>
			<div slot="user" class="broadcast_head"><i></i><span>登录发广播</span></div>
			<div slot="title" class="content_head">
				<p class="title">豆瓣 <span>写了日记</span></p>
				<p class="time">2018-05-25 10:39:23</p>
			</div>
			<div slot="content" class="content_con">
				<p>5月24日凌晨3:00-6:00豆瓣停机维护</p>
				<p>因业务发展需要，豆瓣计划于5月24日凌晨3：:0-6:00对服务器进行机房迁移,机房迁移期间豆瓣全部相关</p>
			</div>
			<div slot="comment" class="content_foot">
				<span>29</span>
				<span>14</span>
				<span>25</span>
				<a href="#">...</a>
			</div>
		</broadcast_item>
		<broadcast_item>
			<div slot="title" class="content_head">
					<p class="title1">豆瓣 <span>写了日记</span></p>
					<p class="time">2018-05-25 10:39:23</p>
			</div>
			<div slot="content" class="content_con">
				<p>北京时间3月28日19点19分，豆瓣首部破百万评分人数的电影诞生了</p>
				<p>北京时间3月28日19点19分，豆瓣首部破百万评分人数的电影诞生了...</p>
			</div>
			<div slot="comment" class="content_foot">
				<span>29</span>
				<span>14</span>
				<span>25</span>
				<a href="#">...</a>
			</div>
		</broadcast_item>
  </div>
</template>

<script>
	import Header from "../../components/Header"
	import broadcast_item from "../../components/broadcast_item"
	export default{
		components:{
			Header,broadcast_item
		},
		methods:{
			
		}
	}
</script>


<style scoped>

</style>
