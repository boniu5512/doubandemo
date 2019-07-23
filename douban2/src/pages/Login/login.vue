<template>
	<div>
		<logreg >
			<input type="text" placeholder="手机号/邮箱" slot="phone">
			<input type="text" placeholder="密码" slot="pass">
			<router-link to="/register" slot="haiwai"><span>海外手机登录</span></router-link>
			<span slot="clfiy">免密码登录</span>
			<span slot="yzAndpass">找回密码</span>
		</logreg>
	</div>
</template>

<script>
import logreg from '../../components/loginAndregister.vue'
export default{
	components:{
		logreg
	}
}
	
</script>

<style lang="less">
	span{
		font-size: 16/64rem;
	}
</style>
