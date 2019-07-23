<template>
  <div >
	<Header title="我的">
		<img src="../../assets/ic_settings.png" slot="rImg" class="rImg" @click="login">
		
	</Header>
	<div class="manage">
		<div class="manage_info">
			<i class="fa fa-lock "></i>
			<br />
			<span class="text">密码管理</span>
		</div>
		<div class="manage_info">
			<i class="fa fa-address-card-o"></i>
			<br/>
			<span class="text">银行卡管理</span>
		</div>
	</div>
	<div class="more">
		<ul>
			<li>
				<span><i class="fa fa-file-text-o"></i></span>
				<span class="text">风险承受能力评估</span>
				<span><i class="fa fa-angle-right"></i></span>
			</li>
			<li>
				<span><i class="fa fa-shield"></i></span>
				<span class="text">安全保障</span>
				<span><i class="fa fa-angle-right"></i></span>
			</li>
			<li>
				<span><i class="fa fa-user-o"></i></span>
				<span class="text">我的关注</span>
				<span><i class="fa fa-angle-right"></i></span>
			</li>
			<li>
				<span><i class="fa fa-question-circle-o"></i></span>
				<span class="text">帮助中心</span>
				<span><i class="fa fa-angle-right"></i></span>
			</li>
			<li>
				<span><i class="fa fa-user-o"></i></span>
				<span class="text">关于我们</span>
				<span><i class="fa fa-angle-right"></i></span>
			</li>
			<li>
				<span><i class="fa fa-search"></i></span>
				<span class="text">检查更新</span>
				<span><i class="fa fa-angle-right"></i></span>
			</li>
			<li>
				<span><i class="fa fa-headphones"></i></span>
				<span class="text">联系客服</span>
				<span><i class="fa fa-angle-right"></i></span>
			</li>
		</ul>
	</div>
  </div>
</template>

<script>
import 'font-awesome-4.7.0/css/font-awesome.css'
import Header from "../../components/Header"
export default{
		components:{
			Header
		},
		methods:{
			login(){
				this.$router.push('/login');
			}
		}
	}

</script>


<style scoped lang="less">
.manage{
	width: 100%;
	display: flex;
	border-bottom: 1px solid gainsboro;
	text-align: center;
	line-height:30/64rem;
	padding-bottom:5/64rem;
}
.manage .manage_info{
	flex: 1;
}
.manage_info{
	color:darkslategray;
}
.manage_info i{
	font-size:30/64rem;
	color: #41bc56;
	margin-top:20/64rem;
}
.more{
	width: 100%;
}
.text{
	font-size: 22/64rem;
	line-height:22/64rem;
}
li{
	list-style: none;
	color:darkslategray;
	border-bottom: 1px solid gainsboro;
	height:55/64rem;
	line-height:55/64rem;

}
li i{
	font-size:22/64rem;
	color: #41bc56;
	margin-left: 25/64rem;
	
	
}
li>span:first-child{
	float: left;
	/*line-height: -20/64rem;*/
}
li>span:last-child{
	float: right;
	margin-right:25/64rem;
}
li>span:nth-of-type(2){
	margin-left:15/64rem;
	line-height: 20/64rem;
	/*margin-top: 15/64rem;*/
}
</style>
