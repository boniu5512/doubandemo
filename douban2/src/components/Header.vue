<template>
	<div class="headerWrap" :class="{setGreen:setGreen}" >
		{{title}}
		<slot name="lImg"></slot>
		<slot name="rImg"></slot>
		<slot name="search"></slot>
	</div>
</template>

<script>
export default{
	props:["title","setGreen"]
}
</script>

<style lang="less">
.headerWrap{
	position: relative;
	border-bottom: 1px solid gainsboro;
	height:45/64rem;
	font-size:20/64rem;
	color: darkslategray;
	background:#f7f7f7;
	text-align: center;
	line-height: 45/64rem;
}
.headerWrap .rImg,.headerWrap .lImg{
	width:30/64rem;
	position: absolute;
	top:50%;
	transform: translateY(-50%);
}
.headerWrap input{
	width:73%;
	font-size:14/64rem;
	height: 100%;
	border: none;
	text-indent: 1.5em;
	outline: none;
	color: dimgray;
	
}
.headerWrap input::-webkit-input-placeholder{
		color: gray;
}
.headerWrap .s_l{
	margin-left:7px;
}
.lImg{
	right:65px;
	
}
.rImg{
	right:15px;
}
.search{
	border-radius:0.3em;
	width: 83%;
	height:72%;
	position: absolute;
	top: 52%;
	left:2%;
	transform: translateY(-50%);
	background: #ffffff;
	text-align:start;
	display: flex;
	align-items:center;
	
}
.search img{
	width: 25px;
	height:25px;
}
.setGreen{
	background: #48bd5a;
}
</style>
