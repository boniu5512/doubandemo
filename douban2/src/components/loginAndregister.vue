<template>
	<div>
		<div class="header">
			<div class="close">
				<router-link to="/mine"><i class="fa fa-close"></i></router-link>
			</div>
			<div class="info">
				<div class="title">登录豆瓣</div>
				<div class="desc">
					<span class="text">登录注册表示同意</span>
					<span class="text">豆瓣使用协议、隐私政策</span>
				</div>
			</div>
		</div>
		<div class="form">
			<div class="phone">
				<slot name="PR"></slot>
				<slot name="phone"></slot>
				</div>
			<div class="pass"><slot name="pass"></slot>
			<slot name="getCode"></slot>
			</div>
			<button class="text">登录</button>
			<div class="loginWay">
				<div>
					<slot name="clfiy"></slot>
					<slot name="haiwai"></slot>
				</div>
				<slot name="yzAndpass"></slot>
			</div>
		</div>
		<div class="thirdParty">
			<p class="text">第三方登录</p>
			<div class="icon">
				<div class="icon_item"><i class="fa fa-weibo"></i></div>
				<div class="icon_item"><i class="fa fa-weixin"></i></div>
			</div>
		</div>
		
	</div>
</template>
<script>
import 'font-awesome-4.7.0/css/font-awesome.css';
export default {
};
</script>
<style lang="less">
* {
	font-family: '黑体';
}
.close {
	font-size: 24/64rem;
	line-height: 40/64rem;
	height: 40/64rem;
	text-indent: 0.25em;
}
.text{
	font-size: 16/64rem;
}
.info {
	text-align: center;
}
.info .title {
	font-size: 30/64rem;
	margin-bottom: 7/64rem;
}
.desc span:nth-of-type(1) {
	color: gray;
}
.desc span:nth-of-type(2) {
	color: #65c976;
}
.form {
	width: 90%;
	margin: 0 auto;
	margin-top: 30/64rem;
}
.form input {
	outline: none;
	border: none;
	font-size: 16/64rem;
	width:71%;
	height: 45/64rem;
	text-indent: 0.5em;
}
.form input::-webkit-input-placeholder {
	color: dimgray;
}
.form button {
	outline: none;
	width: 100%;
	background: #a0deaa;
	border: none;
	height: 45/64rem;
	color: white;
	font-size: 18/64rem;
	margin-top: 25/64rem;
	border-radius: 3/64rem;
}
.loginWay {
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 20/64rem;
}
.loginWay > div {
	color: limegreen;
}
.loginWay > span {
	color: darkslategray;
}
.thirdParty {
	width: 90%;
	margin: 0 auto;
	margin-top: 120/64rem;
}
.thirdParty p {
	color: gray;
	text-align: center;
}
.thirdParty .icon {
	width: 40%;
	margin: 0 auto;
	display: flex;
	font-size: 28/64rem;
	justify-content: space-between;
	margin-top: 20/64rem;
}
.icon_item {
	border: 1px solid lightgray;
	width: 50/64rem;
	height: 50/64rem;
	text-align: center;
	line-height: 50/64rem;
	border-radius: 50%;
	box-shadow: 0px 1px 1px lightgray;
}
.form a{
	color:#39bb4a;
	text-decoration: none;
}
.getCode{
	color:#39bb4a;
}
.icon_item:first-child {
	color: #e84b4e;
}
.icon_item:last-child {
	font-size: 24/64rem;
	color: #39bb4a;
}
.phone,
.pass {
	border: 1px solid lightgray;
	box-sizing: border-box;
	width: 100%;
}
.phone {
	display: flex;
	border-bottom: none;
	align-items: center;
}
.phone .PR{
	width: 45/64rem;
	line-height:35/64rem;
	text-align: center;
	height:35/64rem;
	border-right: 1px solid gainsboro;
	font-weight: bold;
}
</style>
